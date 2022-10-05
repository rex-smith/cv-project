import React from "react";

class InterestItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: props.interest,
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
          action=""
          className="interest-item-container"
          onSubmit={(e) => this.props.handleInterestSubmit(e, this.props.id)}
        >
          <div className="form-group field">
            <input
              type="text"
              id="interest"
              name="interest"
              placeholder="interest..."
              value={this.state.interest}
              onChange={this.handleInputChange}
              className="form-field left-align"
            />
            <label htmlFor="interest" className="form-label">
              Interest
            </label>
          </div>
          <input
            type="submit"
            value="Save"
            className="button button-save"
          ></input>
        </form>
      </div>
    );
  }
}

export default InterestItemForm;
