"use strict";

var express = require("express");

var app = express();

var axios = require("axios");

var bcrypt = require("bcrypt");

var _require = require("./database/query"),
    getLinks = _require.getLinks,
    registerUsers = _require.registerUsers,
    getRole = _require.getRole;

app.use(express.json()); // connect server to index.html

app.use(express["static"]("./client/dist")); // create a root route

app.get("users/home/:userName", function (req, res) {
  getRole(req.params.userName, function (err, data) {
    if (err) {
      console.log("problem getting tasks from server for products");
      res.sendStatus(500);
    }

    if (data.length > 0) {
      res.send(data);
    } else {
      res.send();
    }
  });
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