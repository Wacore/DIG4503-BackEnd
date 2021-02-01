import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
    };
  }

  render() {
    return (
      <>
        <h1>Hello, {this.props.firstName}</h1>
      </>
    );
  }
}
