import React from "react";

class EducationItemDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-item-display">
        <h1>Institution: {this.props.institution}</h1>
        <h2>Degree: {this.props.degree}</h2>
        <h2>Time: {this.props.time}</h2>
        <h2>Location: {this.props.location}</h2>
        <button
          onClick={this.props.showEducationForm}
          className="button button-edit"
        >
          Edit
        </button>
        <button
          onClick={this.props.addEducationItem}
          className="button button-add"
        >
          Add New
        </button>
      </div>
    );
  }
}

export default EducationItemDisplay;
