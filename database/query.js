const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database");
  } else {
    console.log("Connected to the database");
  }
});

const getLinks = (userName, callback) => {
  connection.query(
    "SELECT password FROM logIn WHERE userName=?",
    [userName],
    (err, data) => {
      if (err) {
        console.log("problem getting all links in query");
        callback(err, null);
      } else {
        callback(null, data);
      }
    }
  );
};

const registerUsers = (userName, adminRole, password, callback) => {
  connection.query(
    `INSERT INTO logIn (userName, adminRole, password) VALUES ('${userName}','${adminRole}','${password}')`,
    (err, data) => {
      if (err) {
        console.log("problem posting reviews in query");
        callback(err, null);
      } else {
        callback(null, data);
      }
    }
  );
};

module.exports = { getLinks, registerUsers };
