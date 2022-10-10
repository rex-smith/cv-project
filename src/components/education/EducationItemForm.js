import React from "react";
import FormField from "../FormField";
import Button from "../Button";

function EducationItemForm(props) {
  const { institution, degree, location, time, id } = props;

  return (
    <div className="education-item-container">
      <div className="education-column-container">
        <div className="column">
          <FormField
            property="institution"
            value={institution}
            id={props.id}
            alignment="left-align"
          />
          <FormField
            property="degree"
            value={degree}
            id={props.id}
            alignment="left-align"
          />
        </div>
        <div className="column">
          <FormField
            property="location"
            value={location}
            id={props.id}
            alignment="right-align"
          />
          <FormField
            property="time"
            value={time}
            id={props.id}
            alignment="right-align"
          />
        </div>
      </div>
      <div className="delete-button-container">
        <Button
          onClick={(e) => props.removeEducationItem(e, id)}
          text="Delete"
          buttonClass="button-delete"
        />
      </div>
    </div>
  );
}

export default EducationItemForm;
