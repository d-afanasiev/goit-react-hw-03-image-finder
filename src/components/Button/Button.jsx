import { Component } from "react";
import css from "./Button.module.css";

class Button extends Component {
  render() {
    const { imageGallery } = this.props;
    return (
      imageGallery.length !== 0 && (
        <button type="submit" className={css.Button}>
          Load more
        </button>
      )
    );
  }
}

export default Button;
