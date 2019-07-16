import sched, time
import simplekml
from opensky_api import *
from functionLibrary import *
from threading import Thread
from datetime import datetime

class Aircraft():
    def __init__(self, callsign,lat,lon,alt,hdg,hvel,vvel):
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

def get_aircrafts_from_api(api):
    date_time = datetime.now().strftime("%m/%d/%Y, %H:%M:%S")
    print("date and time:",date_time)
    if api.get_states() is None:
        print("ITS NONEE")

def getAircraft():

    api = OpenSkyApi('moreaf','Morea1234')
    # bbox = (min latitude, max latitude, min longitude, max longitude)
    #bbox=(35.920299, 43.891482, -10.284513, 3.824992
    while True:
        print("api call")
        thread = Thread(target=get_aircrafts_from_api, args =[api])
        thread.start()
        time.sleep(6)
        thread.join()

    s = api.get_states()
    aircrafts = []
    #aircraft = np.empty((numberOfAircrafts))

    for state in s.states:
        aircrafts.append(Aircraft(state.callsign,state.latitude,state.longitude,state.geo_altitude,state.heading,state.velocity,state.vertical_rate))


    #aircraft = ['test',41.4669,-4.9866,12176.76,131.81,235.36,-3.25] #TESTING AIRCRAFT
    update_kml(aircrafts)

    print('Done API')


    #print('API',aircraft)

    #time.sleep(1)

    getPosition1s(aircrafts)
    print('Done 1s')

    #print(aircraft[i])

    #time.sleep(1)

    getPosition1s(aircrafts)
    print('Done 2s')

    #print(aircraft[i])

    #time.sleep(1)

    getPosition1s(aircrafts)
    print('Done 3s')

    #print(aircraft[i])

    #time.sleep(1)

    getPosition1s(aircrafts)
    print('Done 4s')

    #time.sleep(1)
    print('Done lap')


def update_kml(aircrafts):
    kml = simplekml.Kml(open=1)
    for aircraft in aircrafts:
        pnt = kml.newpoint()
        pnt.name = aircraft.callsign
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft.lat, aircraft.lon, aircraft.alt)]
        pnt.altitudemode = simplekml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 1
        pnt.style.iconstyle.heading = aircraft.hdg
        pnt.style.iconstyle.icon.href = 'http://192.168.86.35:9000//images/planeicon.png'

    kml.save("testkml.kml")

#s = sched.scheduler(time.time, time.sleep)

getAircraft()
