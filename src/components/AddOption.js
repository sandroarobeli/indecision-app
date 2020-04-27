import React from "react";

const AddOption = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      name="option"
      onChange={props.handleChange}
      value={props.input}
      placeholder="type new option here"
    />
    <button type="submit">Add Option</button>
  </form>
);

export default AddOption;
