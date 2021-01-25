// Import axios, a module, in this file.
const axios = require("axios");

// Make a get request to this URL
axios
  .get("https://pokeapi.co/api/v2/pokemon/umbreon")
  //handle success, and then ...
  .then((res) => {
    // Destructuring on the response and then create a variable to bind the property, data.
    const { data } = res;

    // The above URL will retrun an object with data on the Pokemon requested.
    // Then log this message to the console.
    console.log("This is an " + data.name + " and its ID is " + data.id);
  })
  // handle error
  .catch((err) => {
    // If the promise is rejected, an error will be received.
    // Log the error message to the console.
    console.error(`Error: ${err}`);
  });
