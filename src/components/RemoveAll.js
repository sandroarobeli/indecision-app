import React from "react";

const RemoveAll = (props) => (
  <div className="widget-header">
    <h3 className="widget-header__title">Your Options</h3>
    <button
      className="button button--link"
      type="button"
      onClick={props.handleRemoveAll}
    >
      Remove All
    </button>
  </div>
);

export default RemoveAll;
