import sched, time
import simplekml
from opensky_api import *
from threading import Thread
from datetime import datetime
import time
import math
from dotenv import load_dotenv
import os
load_dotenv()

class Aircraft():
    def __init__(self,icao24,callsign,lat,lon,alt,hdg,hvel,vvel):
        self.icao24 = icao24 if icao24 is not None else "empty"
        self.alt = alt if alt is not None else 0
        self.lat = lat if lat is not None else 0
        self.lon = lon if lon is not None else 0
        self.callsign = callsign if callsign is not None else ""
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

def getAircraft():
api = OpenSkyApi(os.getenv("API_USER"),os.getenv("API_PASS"))
    s = api.get_states()
    aircrafts = []
    print('API call')

    for state in s.states:
        aircrafts.append(Aircraft(state.icao24.split(' ')[0],state.callsign.split(' ')[0],state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))

    update_kml(aircrafts)
    print("Total number of aircrafts:",len(aircrafts))
    time.sleep(5)

def update_kml(aircrafts):
    kml = simplekml.Kml()
    for aircraft in aircrafts:
        pnt = kml.newpoint()
        pnt.name = aircraft.callsign
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft.lat, aircraft.lon, aircraft.alt)]
        pnt.altitudemode = simplekml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 1
        pnt.style.iconstyle.heading = aircraft.hdg
        pnt.style.iconstyle.icon.href = 'http://'+os.getenv("VUE_APP_SERVER_IP")+':'+os.getenv("VUE_APP_SERVER_PORT")+'//images/planeicon.png'
    kml.save("AircraftGlobal.kml")
    send_kml("/Users/albert/Desktop/AirMashup_GSoC/SERVER/AircraftsGlobal.kml")

def send_kml(kml_file):
    url = 'http://'+os.getenv("API_IP")+':'+os.getenv("API_PORT")+'/kml/manage/upload'
    file_name = kml_file.split('/')[-1]
    multipart_form_data = {
        'kml': (file_name, open(kml_file, 'r')),
    }
    response = requests.post(url, files=multipart_form_data)
    print("> Answer received by LiquidGalaxy [%s]. "% response.status_code)

s = sched.scheduler(time.time, time.sleep)

while True:
    s.enter(4.5, 1, getAircraft)
    s.run()
