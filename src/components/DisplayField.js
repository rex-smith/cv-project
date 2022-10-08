import React, { useState, useEffect } from "react";

function DisplayField(props) {
  return <div className="display-field">{props.value}</div>;
}

export default DisplayField;

// Figure out alignment differences, pass in classes as props?
// How to handle each change in a lower level component
