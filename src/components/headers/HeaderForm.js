import React from "react";

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
        <div className="form-group field">
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="full name..."
            value={this.state.fullName}
            onChange={this.handleInputChange}
            className="form-field name"
          />
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
        </div>
        <div className="secondary-header-fields">
          <div className="form-group field">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="address..."
              value={this.state.address}
              onChange={this.handleInputChange}
              className="form-field"
            />
            <label htmlFor="address" className="form-label">
              Address
            </label>
          </div>
          <span className="bar"></span>
          <div className="form-group field">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email..."
              value={this.state.email}
              onChange={this.handleInputChange}
              className="form-field"
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
          <span className="bar"></span>
          <div className="form-group field">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="phone number..."
              value={this.state.phone}
              onChange={this.handleInputChange}
              className="form-field"
            />
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FormHeader;
