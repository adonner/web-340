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
console.log(header.display("Adam", "Donner", "Exercise 2.3"));
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
    message: "home page"

  });
});

// This renders the about page.
app.get("/about", function(req, res) {
  res.render("about", {
    message: "about page"

  });
});

//  This renders the contacts page.
app.get("/contact", function(req, res) {
  res.render("contact", {
    message: "contact page"

  });
});

// This renders the products page.
app.get("/products", function(req, res) {
  res.render("products",{
    message: "products page"

  });
});

// This starts the server.
http.createServer(app).listen(8080, function() {
  console.log ("Application listening on post 8080");
});

// end program
