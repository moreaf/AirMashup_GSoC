var kmlWriter = require('kmlwriter')
const kml = new kmlWriter()
const request = require('request');
aircrafts = []


// function updateAPI(){

//     return new Promise((resolve,reject) => {
//         var req = request('https://moreaf:Morea1234@opensky-network.org/api/states/all?icao24=3424d4', { json: true }, (err, res, body) => 
//         {
//             if (err) { return console.log(err); }
//             var aircrafts = body.states
//             getKML(aircrafts);
//             resolve( aircrafts )      
//         })

//     })
// }

function updateAPI()
{
    request('https://moreaf:Morea1234@opensky-network.org/api/states/all?icao24=3424d4', { json: true }, (err, res, body) => 
        {
            if (err) 
            { return console.log(err); }
            getKML(body.states);
            res = body.states
            return(res)
        }
    )
}

function getPosition1s (aircrafts)
{
    //console.log(aircrafts)
    R = 6371000; //metres
    
    aircrafts.forEach(function(plane)
    { 
        let d = plane[9] //distance in one second
        let lat = plane[6]
        let lon = plane[5]
        let alt = plane[13]
        let hdg = plane[10]
        let hvel = plane[9]
        let vvel = plane[11]

        let lat = (lat*Math.PI)/180
        let lon = (lon*Math.PI)/180
        let hdg = (hdg*Math.PI)/180

        let lat2 = Math.asin(Math.sin(lat)*Math.cos(d/R) + Math.cos(lat)*Math.sin(d/R) * Math.cos(hdg))
        let lon2 = lon + Math.atan2(Math.sin(hdg)*Math.sin(d/R)*Math.cos(lat),Math.cos(d/R)-Math.sin(lat)*Math.sin(lat2))

        let lat2 = (lat2*180)/Math.PI
        let lon2 = (lon2*180)/Math.PI
        let hdg = (hdg*180)/Math.PI


        let alt2 = alt + vvel

        aircrafts[6] = lat2
        aircrafts[5] = lon2
        aircrafts[13] = alt2
        aircrafts[10] = hdg
        aircrafts[11] = hvel
        aircrafts[9] = vvel

        getKML(aircrafts)

        return aircrafts
    })
}  

function getKML(aircrafts)
{
    kml.startKml('kmlTest');
        aircrafts.forEach(function(plane){
            kml.addPlacemark(plane[0],plane[1],plane[5],plane[6],plane[13],'relativeToGround',plane[2])
        })
        kml.saveKML('/Users/albert/desktop/AirMashup_GSoC/KMLs/')
}

function updatePlanes()
{
    updateAPI()
    setTimeout(function(){ getPosition1s(aircrafts);}, 1000)
    setTimeout(function(){ getPosition1s(aircrafts);}, 2000)
    setTimeout(function(){ getPosition1s(aircrafts);}, 3000)
    setTimeout(function(){ getPosition1s(aircrafts);}, 4000)
}

//setInterval(function(){updateAPI();},5000)
updateAPI()
console.log(res)