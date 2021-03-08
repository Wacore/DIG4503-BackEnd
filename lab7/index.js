// import express and declare port number
import express from "express";
const app = express();
const port = 45030;

// data
const names = [
  "Cortney",
  "Dewayne",
  "Trenton",
  "Pamala",
  "Ettie",
  "Errol",
  "Lorrie",
  "Hang",
  "Lauryn",
  "Caterina",
  "Isa",
  "Marcela",
];

// Handle get request on /people/:person
app.get("/people/:person", (req, res) => {
  // using filter to find the name in the array
  const name = names.filter((n) => {
    // return the result after the search
    return n == req.params.person;
  });
  // declare a result variable to store the found name
  let result = name.length == 0 ? { name: "not found" } : { name: name[0] };

  // send the result to the user
  res.json(result);
});

app.get("/search/:name", (req, res) => {
  // using filter to find all the names in the array
  const namesFound = names.filter((n) => n.includes(req.params.name));
  // declare a variable to storer the result
  // if not found, { search: "not found" } will be stored, else { search: namesFound } will be stored
  const result =
    namesFound.length == 0 ? { search: "not found" } : { search: namesFound };

  // send the result to the user
  res.json(result);
});

// Listening on port to handle requests
app.listen(port, () => console.log(`Listening on port ${port} ...`));
