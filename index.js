const express = require("express");
const path = require("path");
const app = express();

// listen to a port
app.listen(8080, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Connected to server 8080");
  }
});
