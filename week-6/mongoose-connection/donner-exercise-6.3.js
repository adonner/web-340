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
var logger = require("morgan")
var mongoose =require("mongoose")

// App functions
var app = express();


var mongoDB = "mongodb+srv://admin:Two2Twins@Home@cluster0-kxswo.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
  //useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

db.once('open', function () {
  console.log('Application connected to mLab');
})

// Creates an HTTP server and outputs a message
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
