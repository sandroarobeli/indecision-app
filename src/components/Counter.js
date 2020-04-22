import React from "react";

function Counter(props) {
  return (
    <div>
      <h4>
        <button
          disabled={props.count === 0}
          type="button"
          onClick={props.handleDecrement}
        >
          -
        </button>
        Count: {props.count}
        <button type="button" onClick={props.handleIncrement}>
          +
        </button>
      </h4>
    </div>
  );
}

export default Counter;
