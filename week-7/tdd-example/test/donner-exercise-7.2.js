/*
============================================
; Title:  donner-exercise-7.2.js
; Author: Adam Donner
; Date:   3 June 2019
; Description: TDD in Action
;===========================================
*/


const header = require('../../../donner-header.js');
console.log(header.display("Adam", "Donner", "Exercise 7.2"));
console.log("") // Line break

// Require assert
var assert = require("assert");

// Describe the tests.
describe("String#split", function() {
  it("should return an array of fruits", function () {

    assert(Array.isArray("Apple,Orange,Mango".split(",")))
  });
});
