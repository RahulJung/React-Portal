"use strict";

var mysql = require("mysql");

var mysqlConfig = require("./config.js");

var connection = mysql.createConnection(mysqlConfig);
connection.connect(function (err) {
  if (err) {
    console.log("Error connecting to the database");
  } else {
    console.log("Connected to the database");
  }
});

var getLinks = function getLinks(userName, callback) {
  connection.query("SELECT password FROM logIn WHERE userName=?", [userName], function (err, data) {
    if (err) {
      console.log("problem getting all links in query");
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

var registerUsers = function registerUsers(userName, adminRole, password, callback) {
  connection.query("INSERT INTO logIn (userName, adminRole, password) VALUES ('".concat(userName, "','").concat(adminRole, "','").concat(password, "')"), function (err, data) {
    if (err) {
      console.log("problem posting reviews in query");
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getLinks: getLinks,
  registerUsers: registerUsers
};