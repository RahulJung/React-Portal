const express = require("express");
const app = express();
const axios = require("axios");
const bcrypt = require("bcrypt");
const { getLinks, registerUsers, getRole } = require("./database/query");
app.use(express.json());

// connect server to index.html
app.use(express.static("./client/dist"));

// create a root route
app.get("users/home/:userName", (req, res) => {
  getRole(req.params.userName, (err, data) => {
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

app.post("/users/register", (req, res) => {
  console.log(req.body);
  registerUsers(
    req.body.userName,
    req.body.adminRole,
    req.body.password,
    (err, data) => {
      if (err) {
        console.log("problem posting in server");
        res.sendStatus(500);
      } else {
        res.send("Posted");
      }
    }
  );
});

// listen to a port
app.listen(8080, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Connected to server 8080");
  }
});
