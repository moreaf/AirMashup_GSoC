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

def getAircraft(icao24id):
    one = time.time()
    api = OpenSkyApi(os.getenv("API_USER"),os.getenv("API_PASS"))
    # bbox = (min latitude, max latitude, min longitude, max longitude)
    #bbox=(35.920299, 43.891482, -10.284513, 3.824992

    s = api.get_states(icao24=icao24id)
    #s = api.get_states(bbox=(35.920299, 43.891482, -10.284513, 3.824992))
    aircrafts = []
    two = time.time()
    totalt= two-one
    #aircraft = np.empty((numberOfAircrafts))

    for state in s.states:
        aircrafts.append(Aircraft(state.icao24.split(' ')[0],state.callsign.split(' ')[0],state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))

    delete_placemark(aircrafts)
    send_placemark(aircrafts)
    openBallon(aircrafts)
    totalt= two-one
    print('Done API 0s',totalt)
    print("Total number of aircrafts:",len(aircrafts))

    time.sleep(1)
    one = time.time()
    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 1s',totalt)

    time.sleep(1)

    one = time.time()
    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 2s',totalt)

    time.sleep(1)

    one = time.time()
    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 3s',totalt)

    time.sleep(1)

    one = time.time()
    getPosition1s(aircrafts)
    edit_placemark(aircrafts)
    two = time.time()
    totalt= two-one
    print('Done 4s',totalt)

    time.sleep(1)

def send_placemark(aircrafts):
    url = 'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/kml/builder/addplacemark'
    files = {'img': (None, '')}
    for aircraft in aircrafts:
        multipart_form_data = {
            'id': aircraft.callsign,
            'name': aircraft.callsign,
            'longitude':aircraft.lon,
            'latitude':aircraft.lat,
            'range':aircraft.alt,
            'description':'test',
            'icon':'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/images/planeicon.png',
            'scale':1
        }
    print(multipart_form_data)
    response = requests.post(url, data=multipart_form_data,files=files)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def delete_placemark(aircrafts):
    url = 'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/kml/builder/deleteTag/Placemark/'+aircrafts[0].callsign
    response = requests.delete(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def edit_placemark(aircrafts):
    url = 'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/kml/builder/editCoodPlacemark'
    files = {'img': (None, '')}
    for aircraft in aircrafts:
        multipart_form_data = {
            'id': aircraft.callsign,
            'name': aircraft.callsign,
            'longitude':aircraft.lon,
            'latitude':aircraft.lat,
            'range':aircraft.alt,
            'description':'test',
            'icon':'http://192.168.1.39:8080/images/planeicon.png',
            'scale':1
        }
    print(multipart_form_data)
    response = requests.post(url, data=multipart_form_data,files=files)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def flyTo(aircraft):
    lat=aircraft.lat
    lon=aircraft.lon
    range=aircraft.alt

    url = 'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/kml/flyto/'+str(lon)+'/'+str(lat)+'/'+str(1500000+range)
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

def openBallon(aircrafts):
    for aircraft in aircrafts:
        id=aircraft.callsign

    url = 'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/kml/manage/balloon/'+str(id)+'/1'
    response = requests.get(url)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)


def getIcao(callsign):
    api = OpenSkyApi('moreaf','Morea1234')
    s = api.get_states()
    print("API done")
    aircrafts = []
    filteredAircrafts = []
    for state in s.states:
        aircrafts.append(Aircraft(state.icao24.split(' ')[0],state.callsign.split(' ')[0],state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))

    #Filtration of the aircraft with empty callsign
    for i in range(0,len(aircrafts)):
        if aircrafts[i].callsign != '':
            filteredAircrafts.append(aircrafts[i])

    for i in range(0,len(filteredAircrafts)):
        if filteredAircrafts[i].callsign == callsign:
            #print(aircrafts[i].callsign,aircrafts[i].icao24)
            return filteredAircrafts[i]


print('Aircraft Callsign:',sys.argv[1])
plane = getIcao(sys.argv[1])
print(plane.callsign,plane.icao24)

flyTo(plane)
while True:
    getAircraft(plane.icao24)
