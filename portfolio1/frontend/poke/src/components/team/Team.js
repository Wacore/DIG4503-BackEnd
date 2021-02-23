import React, { Component } from "react";
import PokeItem from "../pokeItem/pokeItem";
import "./style.css";

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
