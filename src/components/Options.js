import React from "react";
import Option from "./Option.js";

const Options = (props) => (
  <div>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
    {props.options.map((option, index) => (
      <Option
        key={option}
        option={option}
        removeOption={() => props.removeOption(index)}
      />
    ))}
  </div>
);

export default Options;
