/*
============================================
; Title: donner-exercise-2.2.js
; Author: Adam Donner
; Date: 30 April 2019
; Description:  Demonstrates the use of express.
;===========================================
*/





// start program

const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 2.2"));
console.log("") // Line break

// This requires http and express
var express = require("express");
var http = require("http");

// This sets app to express
var app = express();


app.use(function(req, res)
{
  console.log("In comes a request to: %s" + req.url);

  res.end("Hello World\n");
})

// This creates a server
http.createServer(app).listen(8080, function ()
{
  console.log("Application started on port %s", 8080);
})

// end program
