/*
============================================
; Title: donner-exercise-2.3.js
; Author: Adam Donner
; Date: 30 April 2019
; Description:  Demonstrates the use of express to specific handlers.
;===========================================
*/

// start program

const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 2.3"));
console.log("") // Line break


// This requires http and express.
var express = require("express");

var http = require("http");

// This sets app to express.
var app = express();

// This outputs the homepage.
app.get("/", function(request, response)
{

  response.end("Welcome to the homepage.\n");

});

// This outputs the about information.
app.get("/about", function(request, response)
{

  response.end("Welcome to the about page.\n");

});

// This outputs the contact information.
app.get("/contact", function(request, response)
{

  response.end("Welcome to the contact page.\n");

});


// This shows an error message if navigates to a url not specified
app.use(function(request,response)
{

  response.statusCode = 404;

  response.end("404!\n");

})

http.createServer(app).listen(8080, function()
{
  console.log("Application started on port %s", 8080);
});

// end program
