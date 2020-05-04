import React from "react";

const Counter = (props) => (
  <div className="counter" style={{ color: "white" }}>
    <div className="">
      <button
        className="btn__decrement"
        disabled={props.count === 0}
        type="button"
        onClick={props.handleDecrement}
      >
        -
      </button>
      Count: {props.count}
      <button
        className="btn__increment"
        type="button"
        onClick={props.handleIncrement}
      >
        +
      </button>
    </div>
  </div>
);

export default Counter;
