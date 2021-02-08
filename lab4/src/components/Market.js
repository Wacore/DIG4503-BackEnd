import React, { Component } from "react";
import MarketItem from "./MarketItem";

export default class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUpdateCount = () => {
    this.setState({ count: this.state.count + 1 });
    // console.log("clicked");
  };

  render() {
    return (
      <>
        <MarketItem count={this.state.count} />
        <button onClick={this.handleUpdateCount}>Update</button>
      </>
    );
  }
}
