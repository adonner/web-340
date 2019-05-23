/*
============================================
; Title: donner-assignment-5.4.js
; Author: Adam Donner
; Date: 20 May 2019
; Description:  EMS Page.
;===========================================
*/

// start program


const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Assignment 5.4"));
console.log("") // Line break

// Sets view and view engine and logger

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// This sets app to express.
var app = express();

// Look in the views folder for files
app.set("views", path.resolve(__dirname, "views"));

// Use EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

// This renders the index.html page.
app.get("/", function(req, res){
  res.render("index", {
    message: "Home Page"
  });
});

// This renders the list page.
app.get("/list", function(req, res) {
  res.render("list", {
    message: "list page"

  });
});

//  This renders the view page.
app.get("/view", function(req, res) {
  res.render("view", {
    message: "View page"

  });
});

// This renders the New page.
app.get("/new", function(req, res) {
  res.render("new",{
    message: "New page"

  });
});

// This renders the header page.
app.get("/new", function(req, res) {
  res.render("new",{
    title: "Donner-Assignment-5.4"

  });
});

// This starts the server.
http.createServer(app).listen(8080, function() {
  console.log ("Application listening on post 8080");
});

// end program
