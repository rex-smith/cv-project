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
          className="education-item-container"
          action=""
          onSubmit={(e) => this.props.handleEducationSubmit(e, this.props.id)}
        >
          <div className="education-column-container">
            <div className="column">
              <div className="form-group field">
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  placeholder="institution..."
                  value={this.state.institution}
                  onChange={this.handleInputChange}
                  className="form-field left-align"
                />
                <label htmlFor="institution" className="form-label">
                  Institution
                </label>
              </div>
              <div className="form-group field">
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="degree..."
                  value={this.state.degree}
                  onChange={this.handleInputChange}
                  className="form-field left-align"
                />
                <label htmlFor="degree" className="form-label">
                  Degree
                </label>
              </div>
            </div>
            <div className="column">
              <div className="form-group field">
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="location..."
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  className="form-field right-align"
                />
                <label
                  htmlFor="location"
                  className="form-label right-align-absolute"
                >
                  Location
                </label>
              </div>
              <div className="form-group field">
                <input
                  type="text"
                  id="time"
                  name="time"
                  placeholder="time..."
                  value={this.state.time}
                  onChange={this.handleInputChange}
                  className="form-field right-align"
                />
                <label
                  htmlFor="time"
                  className="form-label right-align-absolute"
                >
                  Time
                </label>
              </div>
            </div>
          </div>
          <input type="submit" value="Save" className="button button-save" />
        </form>
      </div>
    );
  }
}

export default EducationItemForm;
