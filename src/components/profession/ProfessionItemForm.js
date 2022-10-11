import React from "react";
import FormField from "../FormField";

function ProfessionItemForm(props) {
  const { company, position, time, location, id, responsibilityArray } = props;
  const professionIndex = props.index;
  return (
    <div className="profession-item-container">
      <div className="profession-column-container">
        <div className="column">
          <FormField
            property="company"
            value={company}
            alignment="left-align"
            id={id}
          />
          <FormField
            property="position"
            value={position}
            alignment="left-align"
            id={id}
          />
        </div>
        <div className="column">
          <FormField
            property="location"
            value={location}
            alignment="right-align"
            id={id}
          />
          <FormField
            property="time"
            value={time}
            alignment="right-align"
            id={id}
          />
        </div>
        {/* {responsibilityArray.map((item) => {
          return (
            <div className="responsibility" key={item.id}>
              <FormField
                property="responsibility"
                value={item.responsibility}
                alignment="left-align"
                id={item.id}
              />
            </div>
          );
        })} */}
        <div>
          {/* <button
            className="button button-add"
            onClick={(e) => props.addResponsibilityItem(e, id)}
          >
            Add Responsibility
          </button> */}
        </div>
      </div>
      <div className="delete-button-container">
        <button
          className="button button-delete"
          onClick={(e) => props.removeProfessionItem(e, id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProfessionItemForm;
