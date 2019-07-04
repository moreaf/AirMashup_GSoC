import sched, time
import simplekml
from opensky_api import *
import pandas as pd
import numpy as np
import sys
from functionLibrary import *

def getKML():
    api = OpenSkyApi('moreaf','Morea1234')
    # bbox = (min latitude, max latitude, min longitude, max longitude)
    s = api.get_states(bbox=(35.920299, 43.891482, -10.284513, 3.824992))
    numberOfAircrafts = len(s.states)
    aircraft = [0]*numberOfAircrafts
    #aircraft = np.empty((numberOfAircrafts))

    for i in range (0,numberOfAircrafts-1):
        callsign = s.states[i].callsign
        lat = s.states[i].latitude
        lon = s.states[i].longitude
        alt = s.states[i].geo_altitude
        hdg = s.states[i].heading
        hvel = s.states[i].velocity
        vvel = s.states[i].vertical_rate
        aircraft[i] = [callsign,lat,lon,alt,hdg,hvel,vvel]

    # Create an instance of Kml
    kml = simplekml.kml(open=1)
    #single_point = kml.newpoint(name="The World", coords=[(0.0,0.0,0.0)])


    i = 0
    while (i<len(aircraft)-1):
        pnt = kml.newpoint()
        pnt.name = aircraft[i][0]
        pnt.id = aircraft[i][0]
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft[i][2], aircraft[i][1], aircraft[i][3])]
        pnt.altitudemode = kml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 0.65
        pnt.style.iconstyle.icon.href = 'http://192.168.86.21:9000//images/redplaneicon.png'
        i = i+1

    kml.save("KMLTEST.kml")
    print('Done')

    return aircraft



s = sched.scheduler(time.time, time.sleep)

while True:
    s.enter(5, 1, getKML)
    s.run()
