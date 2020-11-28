"use strict";

//require express
var express = require("express"); //create express object


var app = express();

var _require = require("./database/query"),
    postReview = _require.postReview,
    getReviewsByID = _require.getReviewsByID; //server to index.html


app.use(express["static"]("./client/dist")); //create a root route
//listen to a port

app.listen(8080, function (err) {
  if (err) {
    console.log("Error");
  } else {
    console.log("Connected to server 8080");
  }
});