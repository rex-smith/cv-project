import React from "react";
import FormField from "../FormField";

function InterestItemForm(props) {
  const { interest, id, index } = props;
  return (
    <div className="interest-item-container">
      <FormField
        property="interest"
        id={id}
        alignment="left-align"
        value={interest}
      />
      <div className="delete-button-container">
        <button
          className="button button-delete"
          onClick={(e) => props.removeInterestItem(e, id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default InterestItemForm;
