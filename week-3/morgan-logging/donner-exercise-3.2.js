/*
============================================
; Title: donner-exercise-3.2.js
; Author: Adam Donner
; Date: 7 May 2019
; Description:  Morgan logging.
;===========================================
*/

// start program


const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 3.2"));
console.log("") // Line break

// This requires http and express, and morgan.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// This sets app to express.
var app = express();

// look in the views folder for files
app.set("views", path.resolve(__dirname, "views"));

// use EJS view engine
app.set("view engine", "ejs");

app.use(logger("dev"));

// This displays a message in the index page.
app.get("/", function(req, res)
{
  res.render("index", {  //  render index page
    message: "Hello my name is Adam Donner."
  });
});

http.createServer(app).listen(3000, function() {
  console.log("Application started and listening on post %s", 3000);
});
