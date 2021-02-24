const express = require("express");
const app = express();
const teamData = require("./data/team");
const bodyParser = require("body-parser");

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/img"));

app.get("/api/team", (req, res) => {
  res.send(teamData);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
