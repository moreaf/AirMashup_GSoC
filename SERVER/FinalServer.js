const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
const request = require('request')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var sendAir = []
var sendSRoutes = []
var sendCharts = []

var airports = JSON.parse(fs.readFileSync('/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/ssaa.txt', 'utf8'));
var sroutes = JSON.parse(fs.readFileSync('/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/ROUTES/sroutes.txt', 'utf8'));
var introutes = JSON.parse(fs.readFileSync('/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/ROUTES/introutes.txt', 'utf8'));
var charts = JSON.parse(fs.readFileSync('/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIS/charts.txt', 'utf8'));

// var  airports = [
//             {id:0,name:'LLEIDA-ALGUAIRE AIRPORT', kml: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LEBL.kml' , img: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LEDA.jpg'},
//             {id:1, name:'BARCELONA-EL PRAT AIRPORT', kml: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LEBL.kml', img: '/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LEBL.jpg' },
//             {id:2, name:"GIRONA-COSTA BRAVA AIRPORT",kml:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LEGE.kml",img:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LEGE.jpg"},
//             {id:3, name:"SABADELL AIRPORT", kml:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/SSAA/LELL.kml",img:"/Users/albert/Desktop/AirMashup_GSoC/SERVER/database/AIRPORTS/LELL.jpg"}
// ]

app.get('/changeAirports/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(airports[req.params.id].kml))
    form.submit('http://192.168.86.90:8080/kml/manage/upload',function(err,res){
      console.log(res)
      request('http://192.168.86.90:8080/kml/manage/initTour/Orbit')

    })
    response.send("done")
})

app.get('/changeSRoutes/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(sroutes[req.params.id].kml))
    form.submit('http://192.168.86.90:8080/kml/manage/upload')
    response.send("done")
})

app.get('/changeIntRoutes/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(introutes[req.params.id].kml))
    form.submit('http://192.168.86.90:8080/kml/manage/upload')
    response.send("done")
})

app.get('/changeCharts/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(charts[req.params.id].kml))
    form.submit('http://192.168.86.90:8080/kml/manage/upload')
    response.send("done")
})

app.get('/getAirports',function(req,res){
  renderPlanes()
  .then(function(data){
    res.json(data)

  })






})

app.get('/getSRoutes',function(req,res){
  renderSRoutes()
  .then(function(data){
    res.json(data)

  })






})

app.get('/getIntRoutes',function(req,res){
  renderIntRoutes()
  .then(function(data){
    res.json(data)

  })






})

app.get('/getCharts',function(req,res){
  renderCharts()
  .then(function(data){
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

function renderSRoutes(){

  return new Promise(function(resolve,reject){
    var sendSRoutes = []
    sroutes.forEach(function(sroute){
      var data = fs.readFileSync(sroute.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendSRoutes.push({id: sroute.id, name: sroute.name,img:base64})
    })
    resolve(sendSRoutes)

  })
}

function renderIntRoutes(){

  return new Promise(function(resolve,reject){
    var sendIntRoutes = []
    introutes.forEach(function(introute){
      var data = fs.readFileSync(introute.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendIntRoutes.push({id: introute.id, name: introute.name,img:base64})
    })
    resolve(sendIntRoutes)

  })
}

function renderCharts(){

  return new Promise(function(resolve,reject){
    var sendCharts = []
    charts.forEach(function(chart){
      var data = fs.readFileSync(chart.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendCharts.push({id: chart.id, name: chart.name,img:base64})
    })
    resolve(sendCharts)

  })
}

app.get('/',function(req,res){




})

app.listen(8080)
