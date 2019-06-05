/*
============================================
; Title:  donner-exercise-7.3.js
; Author: Adam Donner
; Date:   3 June 2019
; Description: Mocha and Chai
;===========================================
*/


const header = require('../../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 7.3"));
console.log("") // Line break

// Require statements
var fruits = require("../donner-fruits");
var chai = require("chai");
// Assert variable set to Chai
var assert = chai.assert;

// Describe test group.
describe("fruits", function () {
  it("should return an array of fruits", function () {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
