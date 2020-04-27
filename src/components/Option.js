import React from "react";

const Option = (props) => (
  <li>
    {props.option}
    <button type="button" onClick={props.removeOption}>
      Remove
    </button>
  </li>
);

export default Option;
