// Include express to the projec
const express = require("express");
const app = express();

// declare port
const port = 3000;

// root route
app.get("/", (req, res) => {
  // return a message when a user get access to the route
  res.send("Hello World!");
});

// public route
app.use("/public", express.static("public"));

// Listen to port 3000
app.listen(port, () => {
  // call-back: when the server starts, this message will appear on the concole.
  console.log(`Listening on port ${port}...`);
});
