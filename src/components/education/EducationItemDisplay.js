import React from "react";

class EducationItemDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-item-container">
        <div className="education-column-container">
          <div className="column">
            <h2>{this.props.institution}</h2>
            <h2>{this.props.degree}</h2>
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

export default EducationItemDisplay;
