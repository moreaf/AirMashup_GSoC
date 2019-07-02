import sys

import simplekml
from opensky_api import *
import pandas as pd
import numpy as np


api = OpenSkyApi()
# bbox = (min latitude, max latitude, min longitude, max longitude)
s = api.get_states(bbox=(35.920299, 43.891482, -10.284513, 3.824992))
numberOfAircrafts = len(s.states)
aircraft = [0]*numberOfAircrafts
#aircraft = np.empty((numberOfAircrafts))

for i in range (0,numberOfAircrafts-1):
    callsign = s.states[i].callsign
    lat = s.states[i].latitude
    lon = s.states[i].longitude
    alt = s.states[i].baro_altitude
    #print(callsign,lat,lon,alt)
    aircraft[i] = (callsign,lat,lon,alt)


# Create an instance of Kml
kml = simplekml.Kml(open=1)
#altitudemode=simplekml.AltitudeMode.relativetoground

# Create a point named "The World" attached to the KML document with its coordinate at 0 degrees latitude and longitude.
# All the point's properties are given when it is constructed.
single_point = kml.newpoint(name="The World", coords=[(0.0,0.0,0.0)])

# Create a point for each city. The points' properties are assigned after the point is created

i = 0
while (i<len(aircraft)-1):
    pnt = kml.newpoint()
    pnt.name = aircraft[i][0]
    #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
    pnt.coords = [(aircraft[i][2], aircraft[i][1], aircraft[i][3])]
    pnt.altitudemode = simplekml.AltitudeMode.relativetoground
    pnt.style.iconstyle.scale = 0.65
    pnt.style.iconstyle.icon.href = '/Users/albert/desktop/GSoC/OpenSkyAPI/redplaneicon.png'
    i = i+1


#test1 = kml.newpoint()
#test1.name = aircraft[10][0]
#test1.coords = [(aircraft[10][2], aircraft[10][1], aircraft[10][3])]
#test1.altitudemode = simplekml.AltitudeMode.relativetoground
# Save the KML
kml.save("KMLTEST.kml")
print('Done')
