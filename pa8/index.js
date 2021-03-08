const express = require("express");
const app = express();
const port = 3000;

const data = [
  "Rillaboom",
  "Cinderace",
  "Inteleon",
  "Greedent",
  "Corviknight",
  "Orbeetle",
  "Thievul",
  "Eldegoss",
  "Dubwool",
  "Drednaw",
  "Boltund",
  "Coalossal",
  "Flapple",
  "Appletun",
  "Silicobra",
  "Alcremie",
  "Morpeko",
  "Dragapult",
  "Zacian",
  "Zamazenta",
  "Eternatus",
];

// Handle get request on /people/:person
app.get("/pokemon/:name", (req, res) => {
  // using filter to find the name in the array
  const name = data.filter((n) => {
    // return the result after the search
    return n == req.params.name;
  });
  // declare a result variable to store the found pokemon
  let result =
    name.length == 0
      ? `Not found! Params: ${req.params.name}`
      : `Found: ${name[0]}. Params: ${req.params.name}`;

  // send the result to the user
  res.json(result);
});

app.get("/search/:name", (req, res) => {
  // using filter to find all the names in the array
  const pokemonsFound = data.filter((n) => n.includes(req.params.name));
  // declare a variable to storer the result
  const result =
    pokemonsFound.length == 0
      ? `Not found! Params: ${req.params.name}`
      : `Found: ${pokemonsFound}. Params: ${req.params.name}`;

  // send the result to the user
  res.json(result);
});
app.listen(port, () => console.log(`Listening on port ${port} ...`));
