/*
============================================
; Title:  donner-exercise-5.2.js
; Author: Adam Donner
; Date:   21 May 2019
; Description: Demonstrates the use of if
; statements inside of an EJS file.
;===========================================
*/


const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 5.2"));
console.log("") // Line break

// Requires Statements
var express = require("express");
var http = require("http");
var path = require("path");

// App functions
var app = express();

// Instructs express to look inside of the views folder for files.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


var composers = [
  "Bach",
  "Mozart",
  "Beethoven",
  "Verdi"
]

//  Routes
app.get ("/", function(req, res) {
  res.render("index", {
    names: composers
  });
});

// Creates an HTTP server and outputs a message
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
