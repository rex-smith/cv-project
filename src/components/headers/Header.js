import React from "react";
import HeaderDisplay from "./HeaderDisplay";
import HeaderForm from "./HeaderForm";
import "./header.css";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      showForm: true,
      fullName: "Jane L. Doe",
      address: "123 Appletree Way",
      email: "janedoe@gmail.com",
      phone: "(123)456-7890",
    };
  }

  handleHeaderSubmit = (event) => {
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let address = event.target.address.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;
    this.setState({
      showForm: false,
      fullName: fullName,
      address: address,
      email: email,
      phone: phone,
    });
  };

  showEdit = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    const { showForm } = this.state;
    let content;
    if (showForm) {
      content = (
        <form action="" className="header" onSubmit={this.handleHeaderSubmit}>
          <HeaderForm
            fullName={this.state.fullName}
            address={this.state.address}
            email={this.state.email}
            phone={this.state.phone}
          />
          <div className="button-container">
            <button onClick={this.showEdit} className="button button-edit">
              Edit
            </button>
            <input type="submit" value="Save" className="button button-save" />
          </div>
        </form>
      );
    } else {
      content = (
        <div>
          <HeaderDisplay
            fullName={this.state.fullName}
            address={this.state.address}
            email={this.state.email}
            phone={this.state.phone}
          />
          <div className="button-container">
            <button onClick={this.showEdit} className="button button-edit">
              Edit
            </button>
          </div>
        </div>
      );
    }

    return <div className="header-container">{content}</div>;
  }
}

export default Header;
