/*
============================================
; Title:  donner-exercise-6.3.js
; Author: Adam Donner
; Date:   21 May 2019
; Description: Demonstrates the connection to external database
;===========================================
*/


const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 6.3"));
console.log("") // Line break

// Requires Statements
var express = require("express");
var http = require("http");
var logger = require("morgan")
var mongoose =require("mongoose")

// App functions
var app = express();

// Link to my database
var mongoDB = "mongodb+srv://admin:Two2Twins@buwebdev-cluster-1-6mue2.mongodb.net/test?retryWrites=true";

// Call to connect.
mongoose.connect(mongoDB, {
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

// On error output error message.
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// On success output message.
db.once('open', function () {
  console.log('Application connected to mLab');
})

// Creates an HTTP server and outputs a message
http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000!");
});
