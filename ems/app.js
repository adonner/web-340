/*
============================================
; Title: app.js
; Author: Adam Donner
; Date: 10 June 2019
; Description:  EMS Page.
;===========================================
*/

// start program


const header = require('../donner-header.js');
console.log(header.display("Adam", "Donner", "EMS Project"));
console.log("") // Line break

// Sets required statements

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var mongoose =require("mongoose")

// Create csrf token to be stored as a cookie
var csrfProtection = csrf({cookie: true});

// Declare the Employee variable and import employee.js
var Employee = require("./models/employee");

var app = express();

// Link to my database
var mongoDB = "mongodb+srv://admin:Two2Twins@buwebdev-cluster-1-6mue2.mongodb.net/test?retryWrites=true";

// Call to connect to database.
mongoose.connect(mongoDB, {
});

// Set global promise.
mongoose.Promise = global.Promise;

// Creates variable containing mongoose connection
var db = mongoose.connection;

// On error output error message.
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// On success output message.
db.once('open', function () {
  console.log('Application connected to mLab');
})


// Instructs express to look inside of the views folder for files.
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.use(logger("short"));
app.use(express.static('./'));

app.use(bodyParser.urlencoded({
  extended: true
}));

// Apply cookieParser
app.use(cookieParser());

// Apply csrfProtection
app.use(csrfProtection);

// Call Express to generate new token and assign to response.
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// This renders the index (home) page.
app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    page: "home"
  });
});

// This renders the list page.
app.get("/list", function(request, response) {
  // Call find on Employee to retrieve all employee data.
  Employee.find({}, function (error, employees) {
    if(error) {
      throw error;
    }

    response.render("list", {
      title: "Employees",
      page: "list",
      employees
    });
  });
});

// This renders the new page.
app.get("/new", function(request, response) {
  response.render("new", {
    title: "New Employee",
    page: "new"
  });
});

// Call post to setup the route for new employee
app.post('/process', function(req, res) {
  // console.log(request.body.txtName);
  // Confirms first name was entered else error.
  if (!req.body.txtFirstName) {
    res.status(400).send('Entries must have a first name');
    return;
  }
  // Confirms last name was entered else error.
  if (!req.body.txtLastName) {
    res.status(400).send('Entries must have a last name');
    return;
  }

  // Get the request's form data and output to console.log
  var firstName = req.body.txtFirstName;
  var lastName = req.body.txtLastName;
  console.log(firstName + " " + lastName);

  // Creates the employee model with first and last name
  let employee = new Employee({
    firstName, lastName
  });

  // Save employee data to database.
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(firstName + " " + lastName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

// This renders the view page.
app.get('/view/:queryName', function(request, response) {
  var queryName = request.params['queryName'];

  Employee.find({_id: queryName}, function(err, employees) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(employees);

      if (employees.length > 0) {
        response.render('view', {
          title: 'EMS | View',
          employee: employees
        })
      }
      else {
        response.redirect('/list')
      }
    }
  })
});

// Creates a new Node.js server and listens on port 8080.
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
