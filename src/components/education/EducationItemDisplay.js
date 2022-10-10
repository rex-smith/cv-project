import React from "react";
import DisplayField from "../DisplayField";

function EducationItemDisplay(props) {
  return (
    <div className="education-item-container">
      <div className="education-column-container">
        <div className="column">
          <DisplayField value={props.institution} />
          <DisplayField value={props.degree} />
        </div>
        <div className="column">
          <DisplayField value={props.location} />
          <DisplayField value={props.time} />
        </div>
      </div>
    </div>
  );
}

export default EducationItemDisplay;
