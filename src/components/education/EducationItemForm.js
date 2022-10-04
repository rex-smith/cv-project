import React from "react";

class EducationItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      institution: props.institution,
      degree: props.degree,
      time: props.time,
      location: props.location,
      id: props.id,
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
        <form
          className="education-item-form"
          action=""
          onSubmit={(e) => this.props.handleEducationSubmit(e, this.props.id)}
        >
          <div className="education-item-field">
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              id="institution"
              name="institution"
              placeholder="institution..."
              onChange={this.handleInputChange}
            />
          </div>
          <div className="education-item-field">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="degree..."
              onChange={this.handleInputChange}
            />
          </div>
          <div className="education-item-field">
            <label htmlFor="time">Time</label>
            <input
              type="text"
              id="time"
              name="time"
              placeholder="time..."
              onChange={this.handleInputChange}
            />
          </div>
          <div className="education-item-field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="location..."
              onChange={this.handleInputChange}
            />
          </div>
          <input type="submit" value="Save" className="button button-save" />
        </form>
      </div>
    );
  }
}

export default EducationItemForm;
