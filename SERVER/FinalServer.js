const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var sendAir = []

// var airports = JSON.parse(fs.readFileSync('/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/data.txt', 'utf8'));

var  airports = [
            {id:0,name:'LLEIDA-ALGUAIRE AIRPORT', kml: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LEBL.kml' , img: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LEDA.jpg'},
            {id:1, name:'BARCELONA-EL PRAT AIRPORT', kml: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LEBL.kml', img: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LEBL.jpg' },
            {id:2, name:"GIRONA-COSTA BRAVA AIRPORT",kml:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LEGE.kml",img:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LEGE.jpg"},
            {id:3, name:"SABADELL AIRPORT", kml:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LELL.kml",img:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LELL.jpg"}
]

app.get('/change/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(airports[req.params.id].kml))
    form.submit('http://192.168.86.117:8080/kml/manage/upload')
    response.send("done")
})

app.get('/getAirports',function(req,res){
  console.log(req)
  renderPlanes()
  .then(function(data){
    console.log("data",data)
    res.json(data)

  })






})

function renderPlanes(){

  return new Promise(function(resolve,reject){
    var sendAir = []
    airports.forEach(function(airport){
      var data = fs.readFileSync(airport.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAir.push({id: airport.id, name: airport.name,img:base64})
    })
    resolve(sendAir)

  })
}

app.get('/',function(req,res){




})

app.listen(8080)