var kmlWriter = require('kmlwriter')
const kml = new kmlWriter()
const request = require('request');


request('https://opensky-network.org/api/states/all?lamin=35.920299&lomin=-10.284513&lamax=43.891482&lomax=3.824992', { json: true }, (err, res, body) => 
    {
        if (err) { return console.log(err); }
        aircrafts = body.states
        numberOfAircrafts = aircrafts.length
        //console.log(aircrafts)
        //console.log(numberOfAircrafts)
        
        kml.startKml('kmlTest');
        for (let i = 0; i = numberOfAircrafts-1; i++) 
        {
            kml.addPlaceMark(aircrafts[i][0],aircrafts[i][1],aircrafts[i][5],aircrafts[i][6],aircrafts[i][13],aircrafts[i][2])
        }
        kml.saveKML('/albert/desktop/')

    });


