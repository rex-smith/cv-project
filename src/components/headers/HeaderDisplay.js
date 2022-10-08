import React from "react";
import DisplayField from "../DisplayField";

function DisplayHeader(props) {
  return (
    <div>
      <div className="header">
        <div className="header-field name">
          <DisplayField property="name" value={props.fullName} />
        </div>
        <div className="secondary-header-fields">
          <div className="header-field">
            <DisplayField property="address" value={props.address} />
          </div>
          <span className="bar"></span>
          <div className="header-field">
            <DisplayField property="email" value={props.email} />
          </div>
          <span className="bar"></span>
          <div className="header-field">
            <DisplayField property="phone" value={props.phone} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayHeader;
