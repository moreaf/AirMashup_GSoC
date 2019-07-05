import sched, time
import simplekml
from opensky_api import *
import pandas as pd
import numpy as np
import sys
from functionLibrary import *
import threading

def getAircraft():
    #GET DATA FROM API
    api = OpenSkyApi('moreaf','Morea1234')
    # bbox = (min latitude, max latitude, min longitude, max longitude)
    s = api.get_states(bbox=(35.920299, 43.891482, -10.284513, 3.824992))
    numberOfAircrafts = len(s.states)
    aircraft = [0]*numberOfAircrafts

    #FILL
    for i in range (0,numberOfAircrafts):
        callsign = s.states[i].callsign
        lat = s.states[i].latitude
        lon = s.states[i].longitude
        alt = s.states[i].geo_altitude
        hdg = s.states[i].heading
        hvel = s.states[i].velocity
        vvel = s.states[i].vertical_rate
        aircraft[i] = [callsign,lat,lon,alt,hdg,hvel,vvel]



    # Create an instance of Kml
    kml = simplekml.Kml(open=1)
    i = 0
    while (i<numberOfAircrafts-1):
        pnt = kml.newpoint()
        pnt.name = aircraft[i][0]
        #pnt.id = aircraft[i][0]
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft[i][2], aircraft[i][1], aircraft[i][3])]
        pnt.altitudemode = simplekml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 0.65
        pnt.style.iconstyle.icon.href = 'http://192.168.1.39:9000//images/redplaneicon.png'
        i = i+1

    #for i in range (0,numberOfAircrafts):
        #aircraft[i][5] = aircraft[I][5]

    kml.save("testkml.kml")
    print('Done')

    i = 30
    print('API',aircraft[i])

    time.sleep(1) #TIME SLEEP 1
    getPosition1s(aircraft)

    print(aircraft[i])

    time.sleep(1) #TIME SLEEP 2
    getPosition1s(aircraft)

    print(aircraft[i])

    time.sleep(1) #TIME SLEEP 3
    getPosition1s(aircraft)

    print(aircraft[i])

    time.sleep(1) #TIME SLEEP 4
    getPosition1s(aircraft)

    print(aircraft[i])

    time.sleep(1) #TIME SLEEP 5


s = sched.scheduler(time.time, time.sleep)

while True:
    s.enter(0, 1, getAircraft)
    s.run()


