// import React and Hooks from react
import React, { useState, useEffect } from "react";
import Team from "../team/Team";
import "./style.css";
// import lodash
import _ from "lodash";

// create a function called Interface to render the Team component and a image of each pokemon.
function Interface() {
  // Using the useState hook to declare two states
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  // create a function used to fecth data from the API
  const callApi = async () => {
    // Calling the api and await for the result
    const response = await fetch("/api/team");
    const body = await response.json();
    // The request is rejected, send an error
    if (response.status !== 200) throw Error(body.message);
    // return data
    return body;
  };

  useEffect(() => {
    // Use the function to fetch data from the API
    callApi()
      .then((res) => setTeamMembers(res)) // set data into the state
      .catch((err) => console.log(err)); // if any errors occurred, log the error to the console.
  }, []); // componentDidMount

  // create a function to handle the click event and render an image
  function handleSelectPokemon(name) {
    let result = _.find(teamMembers, { name: name });
    setSelectedPokemon(result);
    let image = document.getElementById("pokeImage");
    image.setAttribute("src", result.image);
    image.style.display = "block";
  }

  return (
    <div className="interface">
      <Team teamMembers={teamMembers} onSelectPokemon={handleSelectPokemon} />
      <div className="poke-image">
        <img id="pokeImage" alt="pokemon " />
      </div>
    </div>
  );
}

export default Interface;
