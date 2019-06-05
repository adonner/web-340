/*
============================================
; Title:  donner-exercise-7.3.js
; Author: Adam Donner
; Date:   3 June 2019
; Description: Mocha and Chai
;===========================================
*/


const header = require('../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 7.3"));
console.log("") // Line break

function fruits(str) {
  // Split the string on a comma
  return str.split(",");
}

module.exports = fruits;
