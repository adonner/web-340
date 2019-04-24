/*
============================================
; Title:  donner-Assignment-1.5.js
; Author: Professor Krasso
; Date:  23 April 2019
; Modified By: Adam Donner
; Description: Hello World
;===========================================
*/
/*
 Expected output:

 My name is Adam Donner and I love JavaScript!

*/

// start program


const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Assignment 1.5"));
console.log("") // Line break

// This will require the http module and add to a variable
var http = require("http");

// This function processes the incoming http requests and outputs the results
function processRequest(req, res) {

  var body = "My name is Adam Donner and I love JavaScript!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

// This variable creates the create server.
var s = http.createServer(processRequest);

s.listen(8080);

// end program
