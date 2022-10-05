import React from "react";

class InterestItemForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { interest, id, index } = this.props;
    return (
      <div className="interest-item-container">
        <div className="form-group field">
          <input
            type="text"
            id="interest"
            name="interest"
            placeholder="interest..."
            value={interest}
            onChange={(e) => this.props.handleChange(index, e)}
            className="form-field left-align"
          />
          <label htmlFor="interest" className="form-label">
            Interest
          </label>
        </div>
        <div className="delete-button-container">
          <button
            className="button button-delete"
            onClick={(e) => this.props.removeInterestItem(e, id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default InterestItemForm;
