const express = require('express')
const FormData = require('form-data')
const fs = require('fs')
const app = express()
var axios = require('axios');
const http = require('http');
const request = require('request')
const exec = require('child_process').exec;
require('dotenv').config()


var minlat = 36
var maxlat = 44
var minlon = -9
var maxlon = 3

const child = exec(`python3 test.py ${minlat} ${maxlat} ${minlon} ${maxlon}`, (error, stdout, stderr) => {
    if (error) {
        console.error('stderr', stderr);
        throw error;
    }
    console.log('stdout', stdout);
  });


  //   const child = execFile('python3', [command])
  // response.send({message:"done", command: command})
