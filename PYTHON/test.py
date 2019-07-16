import math
import simplekml
import pymongo
import time
import datetime

def insertToDB(object):
    myclient = pymongo.MongoClient('mongodb://localhost:27017/') #We create the database object

    aircraftsDB = myclient['AirMashupDB'] #Create a database

    mycol = mydb['aircrafts'] #Create a collection into my mydatabase

    x = mycol.insert_one(object)

    #myquery = {'name':'Albert'}


def getPosition1s(aircraft):
    R = 6371000 #metres

    i = 0
    while (i<len(aircraft)):

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
def update():

    aircraft = ['test',41.4669,-4.9866,12176.76,131.81,235.36,-3.25] #TESTING AIRCRAFT



    kml = simplekml.Kml(open=1)

    i = 0

    while (i<len(aircraft)):
        pnt = kml.newpoint()
        pnt.name = aircraft[0]
        #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
        pnt.coords = [(aircraft[2], aircraft[1], aircraft[3])]
        pnt.altitudemode = simplekml.AltitudeMode.relativetoground
        pnt.style.iconstyle.scale = 1
        pnt.style.iconstyle.heading = aircraft[4]
        pnt.style.iconstyle.icon.href = 'http://192.168.86.35:9000//images/planeicon.png'
        i = i+1

    kml.save("testkml.kml")

    for i in range(0,6000):
        getPosition1s(aircraft)
    print('Done')
