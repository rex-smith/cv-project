import React from "react";

class ProfessionItemDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profession-item-container">
        <div className="profession-column-container">
          <div className="column">
            <h2>{this.props.company}</h2>
            <h2>{this.props.position}</h2>
          </div>
          <div className="column">
            <h2 className="right-align">{this.props.location}</h2>
            <h2 className="right-align">{this.props.time}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionItemDisplay;
