/*
============================================
; Title: employee.js
; Author: Adam Donner
; Date: 4 June 2019
; Description:  File for the EMS database model
;===========================================
*/

// start program

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema with first and last name
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);

// end program
