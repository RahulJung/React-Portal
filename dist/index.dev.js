"use strict";

var express = require("express");

var path = require("path");

var app = express(); // listen to a port

app.listen(8080, function (err) {
  if (err) {
    console.log("Error");
  } else {
    console.log("Connected to server 8080");
  }
});