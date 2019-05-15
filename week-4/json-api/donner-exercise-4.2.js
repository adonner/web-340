/*
============================================
; Title: donner-exercise-4.2.js
; Author: Adam Donner
; Date: 7 May 2019
; Description:  Creates and API using JSON.
;===========================================
*/

// start program

const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 4.2"));
console.log("") // Line break


// This requires http and express.
var express = require("express");
var http = require("http");


//  This sets the app to express.
var app = express();

// Creates get request that passes in an id and passes in a request and response object
app.get("/customer/:id", function(req, res) {

  var id = parseInt(req.params.id, 10);

  // Responds to request using JSON.
  res.json({

    fistName: "Leo",
    lastName: "Tolstoy",
    employeeId: id

  });

});

//  This creates the server.
http.createServer(app).listen(3000, function() {
  console.log("Application started and listening on port %s", 3000);
});
