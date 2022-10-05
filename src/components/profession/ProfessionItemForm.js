import React from "react";

class ProfessionItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: props.company,
      position: props.position,
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
          className="profession-item-container"
          action=""
          onSubmit={(e) => this.props.handleProfessionSubmit(e, this.props.id)}
        >
          <div className="profession-column-container">
            <div className="column">
              <div className="form-group field">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="company..."
                  value={this.state.company}
                  onChange={this.handleInputChange}
                  className="form-field left-align"
                />
                <label htmlFor="company" className="form-label">
                  Company
                </label>
              </div>
              <div className="form-group field">
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="position..."
                  value={this.state.position}
                  onChange={this.handleInputChange}
                  className="form-field left-align"
                />
                <label htmlFor="position" className="form-label">
                  Position
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

export default ProfessionItemForm;
