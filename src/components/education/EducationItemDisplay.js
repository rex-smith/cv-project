import React from "react";

class EducationItemDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.institution}</h1>
        <h2>{this.props.degree}</h2>
        <h2>{this.props.time}</h2>
        <h2>{this.props.location}</h2>
        <button onClick={this.props.showEducationForm}>Edit</button>
        <button onClick={this.props.addEducationItem}>Add New</button>
      </div>
    );
  }
}

export default EducationItemDisplay;
