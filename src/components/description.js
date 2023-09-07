import React, { Component } from "react";
import "./styles.css";

class Description extends Component {
  render() {
    console.log(this.props);
    return <div className="description">{this.props.sentence}</div>;
  }
}

export default Description;
