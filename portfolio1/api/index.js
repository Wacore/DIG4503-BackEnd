// include express into the app

const express = require("express");
const app = express();
const teamData = require("./data/team"); // import the data from the file
const bodyParser = require("body-parser");

// declare the port number
const port = 8000;

// using bodyParser, a middleware, to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// calling the express.static middleware function to serve static assets
app.use("/static", express.static(__dirname + "/img"));

// creating a router will the following name
app.get("/api/team", (req, res) => {
  // sending the data imported from the other file to the clients when accessing the router
  res.send(teamData);
});

// Listening on the port 8000
app.listen(port, () => console.log(`Listening on port ${port}`));
