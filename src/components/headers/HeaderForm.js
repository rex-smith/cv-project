import React from "react";
import "./header.css";

class FormHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: props.fullName,
      address: props.address,
      email: props.email,
      phone: props.phone,
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
          className="header-form"
          action=""
          onSubmit={this.props.handleHeaderSubmit}
        >
          <div className="name-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="full name..."
              value={this.state.fullName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="secondary-fields">
            <div className="header-secondary-field">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="address..."
                value={this.state.address}
                onChange={this.handleInputChange}
              />
            </div>
            <span className="bar"></span>
            <div className="header-secondary-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email..."
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <span className="bar"></span>
            <div className="header-secondary-field">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="phone number..."
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <input type="submit" value="Save" className="button button-save" />
        </form>
      </div>
    );
  }
}

export default FormHeader;
