import React from "react";

const AddOption = (props) => (
  <form className="add-option" onSubmit={props.handleSubmit}>
    <input
      className="add-option__input"
      type="text"
      name="option"
      onChange={props.handleChange}
      value={props.input}
      placeholder="type new option here"
    />
    <button className="button" type="submit">
      Add Option
    </button>
  </form>
);

export default AddOption;
