import math
import simplekml
import threading


def getPosition1s(aircraft):
    R = 6371000 #metres

    i = 0
    while (i<len(aircraft)-1):

        d =  aircraft[i][5] #distance in one second
        lat = aircraft[i][2]
        lon = aircraft[i][1]
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

        aircraft[i][2] = lat2
        aircraft[i][1] = lon2
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
        pnt.style.iconstyle.scale = 0.65
        pnt.style.iconstyle.icon.href = 'http://192.168.86.21:9000//images/redplaneicon.png'
        i = i+1

    kml.save("testkml.kml")
    print('Done')

    return aircraft


def setInterval1(func,time):
    e = threading.Event()
    i = 0
    while not e.wait(time) and (i<4):
        func()
        i = i + 1

def setInterval2(func,time):
    e = threading.Event()
    while not e.wait(time):
        func()




