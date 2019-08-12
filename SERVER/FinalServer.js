const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
const request = require('request')
const exec = require('child_process').exec;
const execFile = require('child_process').execFile
const formparser = require('express-formidable');
app.use(formparser())
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
var manufacturers = JSON.parse(fs.readFileSync(__dirname+'/database/MANUFACTURERS/manufacturers.txt', 'utf8'));
var airbusModels = JSON.parse(fs.readFileSync(__dirname+'/database/MANUFACTURERS/AIRBUS/models.txt', 'utf8'));
var boeingModels = JSON.parse(fs.readFileSync(__dirname+'/database/MANUFACTURERS/BOEING/models.txt', 'utf8'));
var bombardierModels = JSON.parse(fs.readFileSync(__dirname+'/database/MANUFACTURERS/BOMBARDIER/models.txt', 'utf8'));
var embraerModels = JSON.parse(fs.readFileSync(__dirname+'/database/MANUFACTURERS/EMBRAER/models.txt', 'utf8'));

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

app.get('/sendAircraftSpain/',function(req,response){
  var minlat = 36
  var maxlat = 43.6
  var minlon = -9
  var maxlon = 2.8
  const child = exec(`python3 AircraftZone.py ${minlat} ${maxlat} ${minlon} ${maxlon}`);
  response.send({message:"done"})
    response.send("done")
})

app.post('/sendAircraftZone',function(req,response){
  var minlat = req.fields.minlat || 36
  var maxlat = req.fields.maxlat || 44
  var minlon = req.fields.minlon || -9
  var maxlon = req.fields.maxlon || 3
  const child = exec(`python3 AircraftZone.py ${minlat} ${maxlat} ${minlon} ${maxlon}`);
  response.send({message:"done"})
})

app.post('/sendAircraftIcao',function(req,response){
  var icao24 = req.fields.icao24 || "EMPTY"

  const child = exec(`python3 AircraftIcao24.py ${icao24}`);
  response.send({message:"done"})
})


app.get('/stop',function(req,response){
  const child = execFile('pkill', ['Python'])
  axios.get('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/clean')
    .catch(function(err){
      console.log(err)
    })
  response.send('killed')
})

app.get('/orbit',function(req,response){
      request('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/initTour/Orbit')
      response.send('done')
})


app.get('/getAirports',function(req,res){
  renderOLS()
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

app.get('/getManufacturers',function(req,res){
  renderManufacturers()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getAirbusModels',function(req,res){
  renderAirbusModels()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getBoeingModels',function(req,res){
  renderBoeingModels()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getBombardierModels',function(req,res){
  renderBombardierModels()
  .then(function(data){
    res.json(data)
  })
})

app.get('/getEmbraerModels',function(req,res){
  renderEmbraerModels()
  .then(function(data){
    res.json(data)
  })
})


function renderOLS(){
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

function renderManufacturers(){
  return new Promise(function(resolve,reject){
    var sendManufacturers = []
    manufacturers.forEach(function(manufacturer){
      var data = fs.readFileSync(manufacturer.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendManufacturers.push({id: manufacturer.id, name: manufacturer.name,img:base64,path:manufacturer.path})
    })
    resolve(sendManufacturers)
  })
}

function renderAirbusModels(){
  return new Promise(function(resolve,reject){
    sendAirbusModels=[]
    airbusModels.forEach(function(airbusModel){
      var data = fs.readFileSync(airbusModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendAirbusModels.push({id: airbusModel.id, name: airbusModel.name,img:base64,lon:airbusModel.lon,lat:airbusModel.lat,range:airbusModel.range,description:airbusModel.description})
    })
    resolve(sendAirbusModels)
  })
}

function renderBoeingModels(){
  return new Promise(function(resolve,reject){
    sendBoeingModels=[]
    boeingModels.forEach(function(boeingModel){
      var data = fs.readFileSync(boeingModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendBoeingModels.push({id: boeingModel.id, name: boeingModel.name,img:base64})
    })
    resolve(sendBoeingModels)
  })
}

function renderBombardierModels(){
  return new Promise(function(resolve,reject){
    sendBombardierModels=[]
    bombardierModels.forEach(function(bombardierModel){
      var data = fs.readFileSync(bombardierModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendBombardierModels.push({id: bombardierModel.id, name: bombardierModel.name,img:base64})
    })
    resolve(sendBombardierModels)
  })
}

function renderEmbraerModels(){
  return new Promise(function(resolve,reject){
    sendEmbraerModels=[]
    embraerModels.forEach(function(embraerModel){
      var data = fs.readFileSync(embraerModel.img)
      var contentType = 'image/png';
      var base64 = Buffer.from(data).toString('base64');
      base64='data:image/png;base64,'+base64;
      sendEmbraerModels.push({id: embraerModel.id, name: embraerModel.name,img:base64})
    })
    resolve(sendEmbraerModels)
  })
}

app.listen(process.env.API_PORT)
