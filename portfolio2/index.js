// import express and file system and declare port number
import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const port = 3010;
app.use(cors());

// get the data from the external file
let fileContents = fs.readFileSync("database.json");

// convert the data into a JSON object
let database = JSON.parse(fileContents);

// Change the server code to serve static files from "client/build" instead of "public".
app.use("/", express.static("client/build"));

// Handle get request on /employees/:name
app.get("/employees/:name", (req, res) => {
  // create a variable called result with an inital value.
  let result = { error: "not found" };

  // find the name in the data
  database.forEach((d) => {
    // check if the names match
    if (d.name == req.params.name) {
      // if they match, replace the value
      result = d;
    }
  });
  // send the result to the client
  res.json(result);
});

// Handle get request on /employees
app.get("/employees", (req, res) => {
  // send the all data to the client
  res.json(database);
});

// Handle get request on /ages/:number
app.get("/ages/:number", (req, res) => {
  // create a variable called result with an inital value.
  let result = { error: "not found" };
  // find the age in the data
  database.forEach((d) => {
    // check if the ages match
    if (d.age == req.params.number) {
      // if they match, replace the value
      result = d;
    }
  });
  // send the result to the client
  res.json(result);
});

// Handle post result to add an employee object to the databse
app.post("/employee/:name/:age", (req, res) => {
  // store the data into an object
  let obj = { name: req.params.name, age: parseInt(req.params.age) };

  // save the data to the array
  database.push(obj);
  // updata the database
  fs.writeFileSync("database.json", JSON.stringify(database, null, "\t"));
  // send the result to the client
  res.json(obj);
});

// Listening on port to handle requests
app.listen(port, () => console.log(`Listening on port ${port} ...`));
