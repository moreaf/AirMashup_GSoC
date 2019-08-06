const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
const request = require('request')
const execFile = require('child_process').execFile;
require('dotenv').config()

console.log(' ---- API ----')
console.log("IP",process.env.API_IP)
console.log("PORT",process.env.API_PORT)
console.log(' ---- server ----')
console.log("IP",process.env.VUE_APP_SERVER_IP)
console.log("PORT",process.env.VUE_APP_SERVER_PORT)

//app.use('/',express.static('./dist'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var sendAir = []
var sendSRoutes = []
var sendCharts = []

var airports = JSON.parse(fs.readFileSync(__dirname+'/database/ssaa.txt', 'utf8'));
var sroutes = JSON.parse(fs.readFileSync(__dirname+'/database/ROUTES/sroutes.txt', 'utf8'));
var introutes = JSON.parse(fs.readFileSync(__dirname+'/database/ROUTES/introutes.txt', 'utf8'));
var charts = JSON.parse(fs.readFileSync(__dirname+'/database/AIS/charts.txt', 'utf8'));

app.get('/changeAirports/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(airports[req.params.id].kml))
    form.submit('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/initTour/Orbit')
      });


    })
    response.send("done")
})

app.get('/changeSRoutes/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(sroutes[req.params.id].kml))
    form.submit('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/initTour/FollowPath')
      });


    })
    response.send("done")
})

app.get('/changeIntRoutes/:id',function(req,response){
  var form = new FormData();
    form.append('kml', fs.createReadStream(introutes[req.params.id].kml))
    form.submit('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/upload',function(err,res){
      console.log(res)
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(600).then(() => {
        request('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/initTour/FollowPath')
      });


    })
    response.send("done")
})

app.get('/changeCharts/:id',function(req,response){
  var form = new FormData();
    form.append('img', fs.createReadStream(charts[req.params.id].img))
    form.append('name', charts[req.params.id].name)
    form.append('id', charts[req.params.id].name)
    form.append('fCorner', charts[req.params.id].fCorner)
    form.append('sCorner', charts[req.params.id].sCorner)
    form.append('tCorner', charts[req.params.id].tCorner)
    form.append('ftCorner', charts[req.params.id].ftCorner)


    form.submit('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/builder/addPhoto')
    response.send("done")
})

app.get('/sendAircraftSpain',function(req,response){
  const child = execFile('python3', ['./python/test.py'])

    response.send("done")
})


app.get('/stop',function(req,response){
  const child = execFile('pkill', ['Python'], (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log('stdout', stdout);
  })
  axios.get('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/clean')
    .catch(function(err){
      console.log(err)
    })
  response.send('killed')
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
      var data = fs.readFileSync(chart.cover)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendCharts.push({id: chart.id, name: chart.name,cover:base64})
    })
    resolve(sendCharts)

  })
}

app.get('/',function(req,res){




})

app.listen(process.env.API_PORT)
