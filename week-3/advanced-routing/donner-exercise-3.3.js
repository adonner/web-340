/*
============================================
; Title: donner-exercise-2.3.js
; Author: Adam Donner
; Date: 7 May 2019
; Description:  Advanced routing.
;===========================================
*/

// start program

const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 2.3"));
console.log("") // Line break


// This requires http and express, and morgan.

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//  This sets the app to express.
var app = express();

//  This sets the app to use the EJS view options.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

//  This displays the product ID that is placed in passed through the browser.
app.get("/:productId", function(req,res){
  var productId = parseInt(req.params.productId, 10);

  res.render("index", {
    productId: productId
  });
});

//  This creates the server.
http.createServer(app).listen(3001, function() {
  console.log("Application started and listening on port %s", 3001);
});
