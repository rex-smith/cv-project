import React, { useState } from "react";

function Field(props) {
  const capitalize = (s) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  const [value, setValue] = useState(props.value);

  return (
    <div className="form-group field">
      <input
        type="text"
        id={props.property + "-" + props.id}
        name={props.property}
        placeholder={capitalize(props.property) + "..."}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={"form-field " + props.alignment}
      />
      <label htmlFor={props.property + "-" + props.id} className="form-label">
        {capitalize(props.property)}
      </label>
    </div>
  );
}

export default Field;
