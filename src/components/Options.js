import React from "react";
import Option from "./Option.js";

const Options = (props) => (
  <div>
    {props.options.length === 0 && (
      <p className="widget-message">Please add an option to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        option={option}
        count={index + 1}
        removeOption={() => props.removeOption(index)}
      />
    ))}
  </div>
);

export default Options;
