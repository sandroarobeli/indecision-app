import React from "react";
import Option from "./Option.js";

function Options(props) {
  const optionsList = props.options.map((option, index) => {
    return (
      <Option
        key={option}
        option={option}
        removeOption={() => props.removeOption(index)}
      />
    );
  });
  return (
    <div>
      <h3>
        {optionsList.length !== 0 ? (
          <p>Here are your options: </p>
        ) : (
          <p>Please add an option to get started</p>
        )}
      </h3>
      <ol>{optionsList}</ol>
    </div>
  );
}

export default Options;
