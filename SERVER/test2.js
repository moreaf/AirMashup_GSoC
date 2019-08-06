const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
const request = require('request')
const execFile = require('child_process').execFile;
require('dotenv').config()


const child = execFile('python3', ['./python/test.py'], (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log('stdout', stdout);
  });
  var form = new FormData();
    form.append('kml', fs.createReadStream('/Users/albert/Desktop/AirMashup_GSoC/SERVER/testkml.kml'))
    form.submit('http://'+process.env.API_IP+':'+process.env.API_PORT+'/kml/manage/upload')