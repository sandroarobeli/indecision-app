import React from "react";
import Modal from "react-modal";

// Using Implicit return SYNTAX here
// Like I do with setState ;)
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.decision}
    contentLabel="Selected Option"
    onRequestClose={props.handleClear}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.decision && <p className="modal__body">{props.decision}</p>}
    <button className="button" onClick={props.handleClear}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
