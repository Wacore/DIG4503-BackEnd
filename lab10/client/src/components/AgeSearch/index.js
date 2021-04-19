import React, { Component } from "react";
import "./index.css";

export default class AgeSearch extends Component {
  readAge(event) {
    // Prevent the window from refreshing
    event.preventDefault();

    // get the value from the input field
    let age = document.getElementById("age").value;
    // send a get request to the route
    fetch(`http://localhost:3010/ages/${age}`)
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
          reportingArea.innerHTML = processed.name;
        }
      });
    document.getElementById("age").value = "";
  }

  render() {
    return (
      <div>
        <h2>Age</h2>
        <form onSubmit={this.readAge}>
          <input type="text" name="age" id="age" placeholder="age" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
