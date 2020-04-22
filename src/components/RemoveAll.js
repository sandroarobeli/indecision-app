import React from "react";

function RemoveAll(props) {
  return (
    <button type="button" onClick={props.handleRemoveAll}>
      Remove All
    </button>
  );
}

export default RemoveAll;
