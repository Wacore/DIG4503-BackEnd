import "./index.css";
import React, { Component } from "react";

export default class NameSearch extends Component {
  readName(event) {
    event.preventDefault();
    // get the value from the input field
    let name = document.getElementById("name").value;
    // send a get request to the route
    fetch(`http://localhost:3010/employees/${name}`)
      .then((res) => {
        return res.json();
      })
      .then((processed) => {
        // Select the reporting area
        let reportingArea = document.getElementById("reportingArea");

        if (processed.error) {
          // if error exists, render the error
          reportingArea.innerHTML = processed.error;
        } else {
          // otherwise, render the result
          reportingArea.innerHTML = processed.age;
        }
      });
  }
  render() {
    return (
      <div>
        <h2>Name</h2>
        <form onSubmit={this.readName}>
          <input type="text" name="name" id="name" placeholder="name" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
