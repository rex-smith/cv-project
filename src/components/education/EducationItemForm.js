import React from "react";

class EducationItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: props.institution,
      degree: props.degree,
      time: props.time,
      location: props.location,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.props.handleEducationSubmit}>
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            id="institution"
            name="institution"
            placeholder="institution..."
            onChange={this.handleInputChange}
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="degree..."
            onChange={this.handleInputChange}
          />
          <label htmlFor="time">Time</label>
          <input
            type="text"
            id="time"
            name="time"
            placeholder="time..."
            onChange={this.handleInputChange}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="location..."
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    );
  }
}

export default EducationItemForm;
