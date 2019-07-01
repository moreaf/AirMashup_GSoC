import math
import simplekml

def getPosition1s(aircraft):
    R = 6371000 #metres
    d =  aircraft[5] #distance in one second

    lat = aircraft[2]
    lon = aircraft[1]
    alt = aircraft[3]
    hdg = aircraft[4]
    hvel = aircraft[5]
    vvel = aircraft[6]

    lat = math.radians(lat)
    lon = math.radians(lon)
    hdg = math.radians(hdg)

    lat2 = math.asin(math.sin(lat)*math.cos(d/R) + math.cos(lat)*math.sin(d/R) * math.cos(hdg))
    lon2 = lon + math.atan2(math.sin(hdg)*math.sin(d/R)*math.cos(lat),math.cos(d/R)-math.sin(lat)*math.sin(lat2))

    lat2 = math.degrees(lat2)
    lon2 = math.degrees(lon2)
    hdg = math.degrees(hdg)


    alt2 = alt + vvel

    aircraft[2] = lat2
    aircraft[1] = lon2
    aircraft[3] = alt2
    aircraft[4] = hdg
    aircraft[5] = hvel
    aircraft[6] = vvel

    return aircraft
