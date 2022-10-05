import React from "react";

class InterestItemDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.interest}</li>;
  }
}

export default InterestItemDisplay;
