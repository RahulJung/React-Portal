"use strict";

var express = require("express");

var path = require("path");

var app = express();

var axios = require("axios");

var bcrypt = require("bcrypt"); // const cors = require("cors");


var _require = require("./database/query"),
    getLinks = _require.getLinks,
    registerUsers = _require.registerUsers,
    getRole = _require.getRole;

app.use(express.json()); // app.use(cors());
// connect server to index.html
// app.use(express.static("./client/dist"));

app.use(express["static"](path.join(__dirname, "./client/dist"))); // create a root route

app.get("/users/home/:userName", function (req, res) {
  console.log("this is params", req.params);
  getRole(req.params.userName, function (err, data) {
    if (err) {
      console.log("problem getting tasks from server for products");
      res.sendStatus(500);
    }

    if (data.length > 0) {
      res.send(data);
    } else {
      res.send("a");
    }
  });
}); // Handles any requests that don't match the ones above - For React Router

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});
app.post("/users/register", function (req, res) {
  console.log(req.body);
  registerUsers(req.body.userName, req.body.adminRole, req.body.password, function (err, data) {
    if (err) {
      console.log("problem posting in server");
      res.sendStatus(500);
    } else {
      res.send("Posted");
    }
  });
}); // listen to a port

app.listen(8080, function (err) {
  if (err) {
    console.log("Error");
  } else {
    console.log("Connected to server 8080");
  }
});