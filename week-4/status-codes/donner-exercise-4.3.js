/*
============================================
; Title: donner-exercise-4.3.js
; Author: Adam Donner
; Date: 7 May 2019
; Description:  Creates HTTP status codes.
;===========================================
*/

// start program

const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 4cu.3"));
console.log("") // Line break


// This requires http and express, and morgan.
var express = require("express");
var http = require("http");
var logger = require("morgan");

//  This sets the app to express.
var app = express();

app.use(logger("dev"));

// Creates get requests using status codes.

app.get("/not-found", function(req, res){

  res.status(404);

  res.json({
    error: "Resource not found."
  });
});

app.get("/ok", function(req, res){

  res.status(200);

  res.json({
    error: "Page loaded correctly."
  });
});

app.get("/not-implemented", function(req, res){

  res.status(501);

  res.json({
    error: "Page not implemented."
  });
});

//  This creates the server.
http.createServer(app).listen(3000, function() {
  console.log("Application started and listening on port %s", 3000);
});
