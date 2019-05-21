/*
============================================
; Title:  donner-exercise-5.3.js
; Author: Adam Donner
; Date:   21 May 2019
; Description: Demonstrates a Pug template
;===========================================
*/


const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 5.3"));
console.log("") // Line break

// Requires Statements
var express = require("express");
var http = require("http");
var path = require("path");
var pug = require("pug")

// App functions
var app = express();

// Instructs express to look inside of the views folder for files.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");


//  Routes
app.get ("/", function(req, res) {
  res.render("index", {
    message: "Strive not to be a success, but rather to be of value -Albert Einstein"
  });
});

// Creates an HTTP server and outputs a message
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
