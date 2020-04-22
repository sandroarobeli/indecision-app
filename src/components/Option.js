import React from "react";

function Option(props) {
  return (
    <li>
      {props.option}
      <button type="button" onClick={props.removeOption}>
        Remove
      </button>
    </li>
  );
}

export default Option;
