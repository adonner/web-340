/*
============================================
; Title: donner-exercise-1.3.js
; Author: Adam Donner
; Date: 19 April 2019
; Description: Parses a URL and outputs the results
;===========================================
*/

/*
 Expected output:

 Adam Donner
 Exercise 1.3
 <Today's Date>

 https:
 www.twinlabworks.com
 name=smith

*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 1.3"));
console.log("") // Line break

// This will requires a url modules and adds a url variable.
var url = require('url')

// This parses the URL object.
var parsedURL = url.parse('https://www.twinlabworks.com/profile?name=smith');

// This outputs the parsed results of the url.
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program
