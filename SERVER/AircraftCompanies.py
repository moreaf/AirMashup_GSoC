import sched, time
import simplekml
from opensky_api import *
from threading import Thread
from datetime import datetime
import time
import math
import sys
from dotenv import load_dotenv
import os
load_dotenv()

class Aircraft():
    def __init__(self,icao24,callsign,lat,lon,alt,hdg,hvel,vvel):
        self.icao24 = icao24 if icao24 is not None else None
        self.alt = alt if alt is not None else 0
        self.lat = lat if lat is not None else 0
        self.lon = lon if lon is not None else 0
        self.callsign = callsign if callsign is not None else None
        self.hdg = hdg if hdg is not None else 0
        self.hvel = hvel if hvel is not None else 0
        self.vvel = vvel if vvel is not None else 0

def getPosition1s(aircrafts):
    R = 6371000 #metres

    i = 0
    for aircraft in aircrafts:
        lat = math.radians(aircraft.lat)
        lon = math.radians(aircraft.lon)
        hdg = math.radians(aircraft.hdg)

        lat2 = math.asin(math.sin(lat)*math.cos(aircraft.hvel/R) + math.cos(lat)*math.sin(aircraft.hvel/R) * math.cos(hdg))
        lon2 = lon + math.atan2(math.sin(hdg)*math.sin(aircraft.hvel/R)*math.cos(lat),math.cos(aircraft.hvel/R)-math.sin(lat)*math.sin(lat2))

        aircraft.lat = math.degrees(lat2)
        aircraft.lon = math.degrees(lon2)
        aircraft.alt += aircraft.vvel

    return aircrafts

def getAircraft(companies):
    one = time.time()
    api = OpenSkyApi(os.getenv("API_USER"),os.getenv("API_PASS"))
    # bbox = (min latitude, max latitude, min longitude, max longitude)
    #bbox=(35.920299, 43.891482, -10.284513, 3.824992

    s = api.get_states(icao24=companies)
    #s = api.get_states(bbox=(35.920299, 43.891482, -10.284513, 3.824992))
    aircrafts = []
    two = time.time()
    totalt= two-one
    #aircraft = np.empty((numberOfAircrafts))

    for state in s.states:
        aircrafts.append(Aircraft(state.icao24,state.callsign,state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))

    update_kml(aircrafts)
    totalt= two-one
    print('Done API 0s',totalt)
    print("Total number of aircrafts:",len(aircrafts))

    time.sleep(1)
    one = time.time()
    getPosition1s(aircrafts)
    update_kml(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 1s',totalt)

    time.sleep(1)

    one = time.time()
    getPosition1s(aircrafts)
    update_kml(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 2s',totalt)

    time.sleep(1)

    one = time.time()
    getPosition1s(aircrafts)
    update_kml(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 3s',totalt)

    time.sleep(1)

    one = time.time()
    getPosition1s(aircrafts)
    update_kml(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 4s',totalt)

    time.sleep(1)



def update_kml(aircrafts):
    kml = simplekml.Kml()
    for aircraft in aircrafts:
        pnt = kml.newpoint()
        pnt.name = aircraft.callsign
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft.lon, aircraft.lat, aircraft.alt)]
        pnt.altitudemode = simplekml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 1
        pnt.style.iconstyle.heading = aircraft.hdg
        pnt.style.iconstyle.icon.href = 'http://'+os.getenv("VUE_APP_SERVER_IP")+':'+os.getenv("VUE_APP_SERVER_PORT")+'/images/planeicon.png'
    kml.save("AircraftsCompanies.kml")
    time.sleep(0.5)
    send_kml("/Users/albert/Desktop/AirMashup_GSoC/SERVER/AircraftsCompanies.kml")


def send_kml(kml_file):
    url = 'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/kml/manage/upload'
    file_name = kml_file.split('/')[-1]
    multipart_form_data = {
        'kml': (file_name, open(kml_file, 'r')),
    }
    response = requests.post(url, files=multipart_form_data)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def getCompanies(company):
    api = OpenSkyApi('moreaf','Morea1234')
    s = api.get_states()
    print("API done")
    aircrafts = []
    companies = []
    filteredAircrafts = []
    for state in s.states:
        aircrafts.append(Aircraft(state.icao24.split(' ')[0],state.callsign.split(' ')[0],state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))

    #Filtration of the aircraft with empty callsign
    for i in range(0,len(aircrafts)):
        if aircrafts[i].callsign != '':
            filteredAircrafts.append(aircrafts[i])

    #Look for the inputed callsign and return de icao24
    for i in range(0,len(filteredAircrafts)):
        if company in filteredAircrafts[i].callsign:
             companies.append(filteredAircrafts[i].icao24)

    return companies


print('Aircraft ICAO Code:',sys.argv[1])
companies = getCompanies(sys.argv[1])

while True:
    getAircraft(companies)
