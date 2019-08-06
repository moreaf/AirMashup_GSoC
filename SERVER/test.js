const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
const request = require('request')
require('dotenv').config()


function sendAircrafts()
{
  axios.request({
    method: 'GET',
    url: 'https://opensky-network.org/api/states/all'
    //?lamin=40&lomin=-10&lamax=609&lomax=25
  }).then(function(res){
    axios.request({
      method:'GET',
      url: 'http://' + process.env.API_IP + ':' + process.env.API_PORT + '/kml/manage/clean'
    }).then(function(response){
      planes = res.data.states
      planes.forEach(function(plane){
      var form = new FormData()
      form.append('id',plane[0] || "NO ID" )
      form.append('name',plane[1]|| "WRONG")
      form.append('latitude',plane[6] || "0")
      form.append('longitude',plane[5]|| "0")
      form.append('range',plane[13] ||  "0")
      form.append('altitudeMode','relativeToGround')
      form.append('description',plane[2] || "WRONG")
      form.append('icon','http://' + process.env.API_IP + ':' + process.env.API_PORT + '/images/planeicon.png')
      form.append('scale',1)
      form.submit('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/builder/addplacemark',function(err,res){
        if(err){
          console.log(err)
        }
      setTimeout(console.log('micropausa'),0.01)
        })
        })

    })

  })

}

sendAircrafts()
