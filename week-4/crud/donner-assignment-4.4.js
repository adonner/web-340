/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/


const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Assignment 4.4"));
console.log("") // Line break


var express = require("express");
var http = require("http");

var app = express();

// Outputs a message for the GET response
app.get("/", function(request, response) {

  response.send("Invoked a GET request.");
});

// Outputs a message for the PUT response
app.put("/", function(request, response) {

  response.send("Invoked a PUT request.");
});

// Outputs a message for the post response
app.post("/", function(request, response) {

  response.send("Invoked a POST request.");
});

// Outputs a message for the delete response
app.delete("/", function(request, response) {

  response.send("Invoked a DELETE request.");
});

// Creates an HTTP server and outputs a message
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
