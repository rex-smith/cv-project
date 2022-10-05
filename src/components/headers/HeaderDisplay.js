import React from "react";

class DisplayHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="header-field name">{this.props.fullName}</div>
          <div className="secondary-header-fields">
            <div className="header-field">{this.props.address}</div>
            <span className="bar"></span>
            <div className="header-field">{this.props.email}</div>
            <span className="bar"></span>
            <div className="header-field">{this.props.phone}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayHeader;
