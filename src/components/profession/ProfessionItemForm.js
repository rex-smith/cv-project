import React from "react";

class ProfessionItemForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, time, location, index, id } = this.props;
    return (
      <div className="profession-item-container">
        <div className="profession-column-container">
          <div className="column">
            <div className="form-group field">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="company..."
                value={company}
                onChange={(e) => this.props.handleChange(index, e)}
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
                value={position}
                onChange={(e) => this.props.handleChange(index, e)}
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
            className="button button-delete"
            onClick={(e) => this.props.removeProfessionItem(e, id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ProfessionItemForm;
