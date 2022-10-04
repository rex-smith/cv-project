import React from "react";

class DisplayHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-display">
        <div className="name-field">{this.props.fullName}</div>
        <div className="secondary-fields">
          <div className="header-secondary-field">{this.props.address}</div>
          <span className="bar"></span>
          <div className="header-secondary-field">{this.props.email}</div>
          <span className="bar"></span>
          <div className="header-secondary-field">{this.props.phone}</div>
        </div>
        <button onClick={this.props.showEdit} className="button button-edit">
          Edit
        </button>
      </div>
    );
  }
}

export default DisplayHeader;
