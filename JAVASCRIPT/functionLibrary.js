const request = require('request');
const kml = require('kmlwriter');

//getAircraft(minlat,maxlat,minlon,maxlon)
function getAircraft(callback)
{
    //bbox = (min latitude, max latitude, min longitude, max longitude)
    return request('https://opensky-network.org/api/states/all?lamin=35.920299&lomin=-10.284513&lamax=43.891482&lomax=3.824992', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        aircrafts = body.states
        numberOfAircrafts = aircrafts.length
        //console.log(aircrafts)
        //console.log(numberOfAircrafts)
        return callback(aircrafts)
    });
}


function getPosition1s (aircraft)
{
    R = 6371000 //metres
    d =  aircraft[5] //distance in one second

    lat = aircraft[2]
    lon = aircraft[1]
    alt = aircraft[3]
    hdg = aircraft[4]
    hvel = aircraft[5]
    vvel = aircraft[6]

    lat = Math.radians(lat)
    lon = Math.radians(lon)
    hdg = Math.radians(hdg)

    lat2 = Math.asin(Math.sin(lat)*Math.cos(d/R) + Math.cos(lat)*Math.sin(d/R) * Math.cos(hdg))
    lon2 = lon + Math.atan2(Math.sin(hdg)*Math.sin(d/R)*Math.cos(lat),Math.cos(d/R)-Math.sin(lat)*Math.sin(lat2))

    lat2 = Math.degrees(lat2)
    lon2 = Math.degrees(lon2)
    hdg = Math.degrees(hdg)


    alt2 = alt + vvel

    aircraft[2] = lat2
    aircraft[1] = lon2
    aircraft[3] = alt2
    aircraft[4] = hdg
    aircraft[5] = hvel
    aircraft[6] = vvel

    return aircraft
}
function createKML (aircraft)
{
    kml.startKml('kmlTest');
    for (let i = 0; i = numberOfAircrafts-1; i++) 
    {
        kml.addPlaceMark(aircraft[i][0],aircraft[i][1],aircraft[i][5],aircraft[i][6],aircraft[i][13],aircraft[i][2])
    }
    kml.writeFile('/albert/desktop/AirMashup_GSoC')
}

let aircrafts
getAircraft(function(requested_aircrafts) {
    //console.log(requested_aircrafts)
    this.aircrafts = requested_aircrafts
})
console.log(aircrafts)
//createKML(aircrafts)

for (let i = 0; i = numberOfAircrafts-1; i++) 
        {
            kml.addPlaceMark(aircrafts[i][0],aircrafts[i][1],aircrafts[i][5],aircrafts[i][6],aircrafts[i][13],aircrafts[i][2])
            
        }
        kml.saveKML('/albert/desktop/')
