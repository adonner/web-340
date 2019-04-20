/*
============================================
; Title: donner-exercise-1.3.js
; Author: Adam Donner
; Date: 19 April 2019
; Description:
;===========================================
*/

/*
 Expected output:

 Adam Donner
 Exercise 1.3
 <Today's Date>

 https:
 www.example.com
 name=smith

*/

// start program

const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 1.3"));
console.log("") // Line break

var url = require('url')

var parsedURL = url.parse('https://www.example.com/profile?name=smith');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// end program
