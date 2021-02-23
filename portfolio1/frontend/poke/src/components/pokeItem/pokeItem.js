import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenus } from "@fortawesome/free-solid-svg-icons";

export default class PokeItem extends Component {
  render() {
    return (
      <div
        className="poke-container"
        onClick={() => this.props.onSelectPokemon(this.props.object.name)}
      >
        <div className="poke-img">
          <img src={this.props.object.url} alt={this.props.object.name} />
        </div>
        <div className="poke-content">
          <div className="content-top">
            <span className="poke-name">{this.props.object.name}</span>
            <span
              className={
                this.props.object.gender === "null"
                  ? "poek-gender-null"
                  : "poke-gender"
              }
            >
              {this.props.object.gender === "null" ? undefined : (
                <FontAwesomeIcon icon={faVenus} />
              )}
            </span>
          </div>
          <div className="content-middle"></div>
          <div className="content-bottom">
            <span className="poke-hp">{this.props.object.hp}</span>
            <span className="poke-level">Lv. {this.props.object.level}</span>
          </div>
        </div>
      </div>
    );
  }
}
