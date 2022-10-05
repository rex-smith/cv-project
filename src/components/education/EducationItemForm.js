import React from "react";

class EducationItemForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { institution, degree, location, time, index, id } = this.props;
    return (
      <div className="education-item-container">
        <div className="education-column-container">
          <div className="column">
            <div className="form-group field">
              <input
                type="text"
                id="institution"
                name="institution"
                placeholder="institution..."
                value={institution}
                onChange={(e) => this.props.handleChange(index, e)}
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
                value={degree}
                onChange={(e) => this.props.handleChange(index, e)}
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
                value={location}
                onChange={(e) => this.props.handleChange(index, e)}
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
                value={time}
                onChange={(e) => this.props.handleChange(index, e)}
                className="form-field right-align"
              />
              <label htmlFor="time" className="form-label right-align-absolute">
                Time
              </label>
            </div>
          </div>
        </div>
        <div className="delete-button-container">
          <button
            onClick={(e) => this.props.removeEducationItem(e, id)}
            className="button button-delete"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EducationItemForm;
