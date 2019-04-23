/*
============================================
; Title:  donner-Assignment-1.5.js
; Author: Professor Krasso
; Date:  23 April 2019
; Modified By: Adam Donner
; Description:
;===========================================
*/


// start program


const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Assignment 1.5"));
console.log("") // Line break


var http = require("http");

function processRequest(req, res) {

var body = "My name is Adam Donner and I love JavaScript!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);

// end program
