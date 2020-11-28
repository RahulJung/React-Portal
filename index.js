//require express
const express = require("express");
//create express object
const app = express();
const { postReview, getReviewsByID } = require("./database/query");
//server to index.html
app.use(express.static("./client/dist"));

//create a root route

//listen to a port
app.listen(8080, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Connected to server 8080");
  }
});
