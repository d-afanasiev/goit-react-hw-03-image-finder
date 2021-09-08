import { Component } from "react";
import css from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toogleModal(false);
    }
  };

  handleBackdropClick = (e) => {
    // console.log(e.target === e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.toogleModal(false);
    }
  };

  render() {
    // console.log(this.props.modalSrc);
    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={this.props.modalSrc} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
