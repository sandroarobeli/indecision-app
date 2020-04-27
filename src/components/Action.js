import React from "react";

const Action = (props) => (
  <div>
    <button
      disabled={props.options.length === 0 || props.decision}
      type="button"
      onClick={props.onMakeDecision}
    >
      What should I do?
    </button>{" "}
  </div>
);

export default Action;
