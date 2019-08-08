import sched, time
import simplekml
from opensky_api import *
from functionLibrary import *
import threading

def getPosition1s(aircraft):
    R = 6371000 #metres

    i = 0
    while (i<len(aircraft)-1):

        d =  aircraft[5] #distance in one second
        lat = aircraft[1]
        lon = aircraft[2]
        alt = aircraft[3]
        hdg = aircraft[4]
        hvel = aircraft[5]
        vvel = aircraft[6]

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

        aircraft[1] = lat2
        aircraft[2] = lon2
        aircraft[3] = alt2
        aircraft[4] = hdg
        aircraft[5] = hvel
        aircraft[6] = vvel
        i = i+1

    return aircraft



def getAircraft():

    api = OpenSkyApi('moreaf','Morea1234')
    # bbox = (min latitude, max latitude, min longitude, max longitude)
    s = api.get_states(bbox=(35.920299, 43.891482, -10.284513, 3.824992))
    aircraft = []

    i = 30
    callsign = s.states[i].callsign
    lat = s.states[i].latitude
    lon = s.states[i].longitude
    alt = s.states[i].geo_altitude
    hdg = s.states[i].heading
    hvel = s.states[i].velocity
    vvel = s.states[i].vertical_rate
    aircraft = [callsign,lat,lon,alt,hdg,hvel,vvel]

    #aircraft = ['test',41.4669,-4.9866,12176.76,131.81,235.36,-3.25] #TESTING AIRCRAFT

    print('API',aircraft)


    # Create an instance of Kml
    #kml = simplekml.Kml(open=1)
    kml = simplekml.Kml(open=1)
    pnt = kml.newpoint()
    pnt.name = aircraft[0] + 'API'
    pnt.coords = [(aircraft[2], aircraft[1], aircraft[3])]
    pnt.altitudemode = simplekml.AltitudeMode.relativetoground
    pnt.style.iconstyle.scale = 0.65
    pnt.style.iconstyle.icon.href = 'http://192.168.1.39:9000//images/redplaneicon.png'
    aircraft[5] = aircraft[5]*0.245

    time.sleep(1)
    getPosition1s(aircraft)

    print(aircraft)

    pnt = kml.newpoint()
    pnt.name = aircraft[0]
    #pnt.id = aircraft[i][0]
    #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
    pnt.coords = [(aircraft[2], aircraft[1], aircraft[3])]
    pnt.altitudemode = simplekml.AltitudeMode.relativetoground
    pnt.style.iconstyle.scale = 0.65
    pnt.style.iconstyle.icon.href = 'http://192.168.1.39:9000//images/redplaneicon.png'

    time.sleep(1)
    getPosition1s(aircraft)

    print(aircraft)

    pnt = kml.newpoint()
    pnt.name = aircraft[0]
    #pnt.id = aircraft[i][0]
    #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
    pnt.coords = [(aircraft[2], aircraft[1], aircraft[3])]
    pnt.altitudemode = simplekml.AltitudeMode.relativetoground
    pnt.style.iconstyle.scale = 0.65
    pnt.style.iconstyle.icon.href = 'http://192.168.1.39:9000//images/redplaneicon.png'

    time.sleep(1)
    getPosition1s(aircraft)

    print(aircraft)

    pnt = kml.newpoint()
    pnt.name = aircraft[0]
    #pnt.id = aircraft[i][0]
    #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
    pnt.coords = [(aircraft[2], aircraft[1], aircraft[3])]
    pnt.altitudemode = simplekml.AltitudeMode.relativetoground
    pnt.style.iconstyle.scale = 0.65
    pnt.style.iconstyle.icon.href = 'http://192.168.1.39:9000//images/redplaneicon.png'

    time.sleep(1)
    getPosition1s(aircraft)

    pnt = kml.newpoint()
    pnt.name = aircraft[0]
    #pnt.id = aircraft[i][0]
    #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
    pnt.coords = [(aircraft[2], aircraft[1], aircraft[3])]
    pnt.altitudemode = simplekml.AltitudeMode.relativetoground
    pnt.style.iconstyle.scale = 0.65
    pnt.style.iconstyle.icon.href = 'http://192.168.1.39:9000//images/redplaneicon.png'

    kml.save("testkml.kml")
    print('Done lap')
    time.sleep(1)

s = sched.scheduler(time.time, time.sleep)

while True:
    s.enter(0, 1, getAircraft)
    s.run()



