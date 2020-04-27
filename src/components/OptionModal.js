import React from "react";
import Modal from "react-modal";

// Using Implicit return SYNTAX here
// Like I do with setState ;)
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.decision}
    contentLabel="Selected Option"
    onRequestClose={props.handleClear}
  >
    <h3>Selected Option</h3>
    {props.decision && <p>{props.decision}</p>}
    <button onClick={props.handleClear}>Okay</button>
  </Modal>
);

export default OptionModal;
