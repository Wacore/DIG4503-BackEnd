import React, { useState, useEffect } from "react";
import Team from "../team/Team";
import "./style.css";
import _ from "lodash";

function Interface(props) {
  const [SelectedPokemon, setSelectedPokemon] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  const callApi = async () => {
    const response = await fetch("/api/team");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  useEffect(() => {
    callApi()
      .then((res) => setTeamMembers(res))
      .catch((err) => console.log(err));
  }, []);

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
