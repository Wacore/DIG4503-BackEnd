import React, { useState } from "react";
import Team from "../team/Team";
import "./style.css";
import _ from "lodash";

import indeedeeUrl from "../../img/Indeedee.png";
import kartanaUrl from "../../img/Kartana.png";
import nihilegoUrl from "../../img/Nihilego.png";
import finiUrl from "../../img/poke.png";
import raichuUrl from "../../img/Raichu.png";
import tornadusUrl from "../../img/Tornadus.png";

import indeedeeBigUrl from "../../img/IndeedeeBig.png";
import kartanaBigUrl from "../../img/KartanaBig.png";
import nihilegoBigUrl from "../../img/NihilegoBig.png";
import finiBigUrl from "../../img/FiniBig.png";
import raichuBigUrl from "../../img/RaichuBig.png";
import tornadusBigUrl from "../../img/TornadusBig.png";

function Interface(props) {
  const [SelectedPokemon, setSelectedPokemon] = useState(null);
  let teamMembers = [
    {
      name: "IndeeDee",
      url: indeedeeUrl,
      image: indeedeeBigUrl,
      gender: "f",
      hp: "177 / 177",
      level: 50,
    },
    {
      name: "Kartana",
      url: kartanaUrl,
      image: kartanaBigUrl,
      gender: "null",
      hp: "145 / 145",
      level: 50,
    },
    {
      name: "Nihilego",
      url: nihilegoUrl,
      image: nihilegoBigUrl,
      gender: "null",
      hp: "185 / 185",
      level: 50,
    },
    {
      name: "Tapu Fini",
      url: finiUrl,
      image: finiBigUrl,
      gender: "null",
      hp: "170 / 170",
      level: 50,
    },
    {
      name: "Tornadus",
      url: tornadusUrl,
      image: tornadusBigUrl,
      gender: "null",
      hp: "155 / 155",
      level: 50,
    },
    {
      name: "Raichu",
      url: raichuUrl,
      image: raichuBigUrl,
      gender: "f",
      hp: "163 / 163",
      level: 50,
    },
  ];

  function handleSelectPokemon(name) {
    let result = _.find(teamMembers, { name: name });
    setSelectedPokemon(result);
    console.log(result);
    let image = document.getElementById("pokeImage");
    image.setAttribute("src", result.image);
    image.style.display = "block";
  }

  return (
    <div className="interface">
      <Team teamMembers={teamMembers} onSelectPokemon={handleSelectPokemon} />
      <div className="poke-image">
        <img id="pokeImage" alt="pokemon image" />
      </div>
    </div>
  );
}

export default Interface;
