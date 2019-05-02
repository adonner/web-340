/*
============================================
; Title: donner-assignment-2.4.js
; Author: Adam Donner
; Date: 30 April 2019
; Description:  Demonstrates the creation of a
; node server and displays the index.ejs page.
;===========================================
*/

// start program

const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Assignment 2.4"));
console.log("") // Line break

// Require statements
var http = require("http");
var express = require("express");
var path = require("path");

//  This sets the app to express.
var app = express();

app.set("views", path.resolve(__dirname, "views"));  // This tells express the views are in the "views" folder
app.set("view engine", "ejs");  //  This tells express to use EJS.

// This returns index.ejs
app.get("/", function(request, response) {

   response.render("index", {

       firstName:"Adam",
       lastName:"Donner",
       address:"724 Dodge Street",
   });

});


// This creates the server to listen on port 8080.
http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});


//end Program
