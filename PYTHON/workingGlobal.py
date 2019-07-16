import sched, time
import simplekml
from opensky_api import *
from functionLibrary import *
import threading

def getPosition1s(aircraft):
    R = 6371000 #metres

    i = 0
    while (i<len(aircraft)-1):

        d =  aircraft[i][5] #distance in one second
        lat = aircraft[i][1]
        lon = aircraft[i][2]
        alt = aircraft[i][3]
        hdg = aircraft[i][4]
        hvel = aircraft[i][5]
        vvel = aircraft[i][6]

        if (alt == None) or (vvel == None) or (lat == None) or (lon == None) or (hdg == None) or (hvel == None) or (d == None):
            alt = 0
            vvel = 0
            lat = 0
            lon = 0
            hdg = 0
            hvel = 0
            d = 637100

        lat = math.radians(lat)
        lon = math.radians(lon)
        hdg = math.radians(hdg)

        lat2 = math.asin(math.sin(lat)*math.cos(d/R) + math.cos(lat)*math.sin(d/R) * math.cos(hdg))
        lon2 = lon + math.atan2(math.sin(hdg)*math.sin(d/R)*math.cos(lat),math.cos(d/R)-math.sin(lat)*math.sin(lat2))

        lat2 = math.degrees(lat2)
        lon2 = math.degrees(lon2)
        hdg = math.degrees(hdg)


        alt2 = alt + vvel

        aircraft[i][1] = lat2
        aircraft[i][2] = lon2
        aircraft[i][3] = alt2
        aircraft[i][4] = hdg
        aircraft[i][5] = hvel
        aircraft[i][6] = vvel
        i = i+1


    kml = simplekml.Kml(open=1)

    i = 0

    while (i<len(aircraft)-1):
        pnt = kml.newpoint()
        pnt.name = aircraft[i][0]
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft[i][2], aircraft[i][1], aircraft[i][3])]
        pnt.altitudemode = simplekml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 1
        pnt.style.iconstyle.heading = aircraft[i][4]
        pnt.style.iconstyle.icon.href = 'http://192.168.86.35:9000//images/planeicon.png'
        i = i+1

    kml.save("testkml.kml")

    return aircraft


def getAircraft():

    api = OpenSkyApi('moreaf','Morea1234')
    # bbox = (min latitude, max latitude, min longitude, max longitude)
    #bbox=(35.920299, 43.891482, -10.284513, 3.824992
    s = api.get_states()
    numberOfAircrafts = len(s.states)
    aircraft = [0]*numberOfAircrafts
    #aircraft = np.empty((numberOfAircrafts))

    for i in range (0,numberOfAircrafts):
        callsign = s.states[i].callsign
        lat = s.states[i].latitude
        lon = s.states[i].longitude
        alt = s.states[i].geo_altitude
        hdg = s.states[i].heading
        hvel = s.states[i].velocity
        vvel = s.states[i].vertical_rate
        aircraft[i] = [callsign,lat,lon,alt,hdg,hvel,vvel]


    #aircraft = ['test',41.4669,-4.9866,12176.76,131.81,235.36,-3.25] #TESTING AIRCRAFT

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
        pnt.style.iconstyle.scale = 1
        pnt.style.iconstyle.heading = aircraft[i][4]
        pnt.style.iconstyle.icon.href = 'http://192.168.86.35:9000//images/planeicon.png'
        i = i+1

    kml.save("testkml.kml")
    print('Done API')

    i = 25
    #print('API',aircraft)

    #time.sleep(1)

    getPosition1s(aircraft)
    print('Done 1s')

    #print(aircraft[i])

    #time.sleep(1)

    getPosition1s(aircraft)
    print('Done 2s')

    #print(aircraft[i])

    #time.sleep(1)

    getPosition1s(aircraft)
    print('Done 3s')

    #print(aircraft[i])

    #time.sleep(1)

    getPosition1s(aircraft)
    print('Done 4s')

    #time.sleep(1)
    print('Done lap')


s = sched.scheduler(time.time, time.sleep)

while True:
    s.enter(0, 1, getAircraft)
    s.run()
