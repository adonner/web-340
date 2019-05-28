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

// Sets required statements

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();

// Instructs express to look inside of the views folder for files.
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.use(logger("short"));
app.use(express.static('./'));

// This renders the index (home) page.
app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    page: "home"
  });
});

// This renders the list page.
app.get("/list", function(request, response) {
  response.render("list", {
    title: "List Employees",
    page: "list"
  });
});

// This renders the new page.
app.get("/new", function(request, response) {
  response.render("new", {
    title: "New Employee",
    page: "new"
  });
});

// This renders the view page.
app.get("/view", function(request, response) {
  response.render("view", {
    title: "View Employee",
    page: "view",
  });
});

// Creates a new Node.js server and listens on port 8080.
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
