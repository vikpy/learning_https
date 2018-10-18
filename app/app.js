'use strict';


//import http from 'http';  
//import express from 'express';  

const https =  require('https') ;
const express = require('express') ; 
var app = express();  
const httpsPort = 1234;  
//import { createServer } from 'https';  
//import { readFileSync } from 'fs';  


var options = {  
    key: readFileSync('./key.pem', 'utf8'),  
    cert: readFileSync('./cert.pem', 'utf8')  
};  
//console.log("KEY: ", options.key)  
//console.log("CERT: ", options.cert)  
const Server = https.createServer(options, app).listen(httpsPort, () => {  
    console.log(`Server listening on :${httpsPort}`);  
});  

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '../public/index.html');  
}); 