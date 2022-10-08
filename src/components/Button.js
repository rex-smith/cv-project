import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick} className={"button " + props.buttonClass}>
      {props.text}
    </button>
  );
}

export default Button;
