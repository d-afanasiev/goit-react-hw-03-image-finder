import { Component } from "react";
import css from "./Modal.module.css";

class Modal extends Component {
  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
