import React, { useState, useEffect } from "react";

function Field(props) {
  const capitalize = (s) =>
    s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  const [value, setValue] = useState(props.value);

  return (
    <div className="form-group field">
      <input
        type="text"
        id={props.property}
        name={props.property}
        placeholder={capitalize(props.property) + "..."}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-field"
      />
      <label htmlFor={props.property} className="form-label">
        {capitalize(props.property)}
      </label>
    </div>
  );
}

export default Field;

// Figure out alignment differences, pass in classes as props?
// How to handle each change in a lower level component
