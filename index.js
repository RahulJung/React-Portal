const express = require("express");

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Helloworld hehehe");
});

app.listen(port, () => {
  console.log(`Connected to port http://localhost:${port}`);
});
