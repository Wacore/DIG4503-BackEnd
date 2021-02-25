import React, { Component } from "react";
import PokeItem from "../pokeItem/pokeItem";
import "./style.css";

// create a react component called Team, rendering all Pokemons and its information passed by the parent in a div container.

export default class Team extends Component {
  render() {
    return (
      <div className="team-container">
        {this.props.teamMembers.map((t, index) => (
          <PokeItem
            key={index}
            object={t}
            onSelectPokemon={this.props.onSelectPokemon}
          />
        ))}
      </div>
    );
  }
}
