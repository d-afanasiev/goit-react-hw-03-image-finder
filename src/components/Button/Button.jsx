import { Component } from "react";
import css from "./Button.module.css";

class Button extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ page: this.props.page + 1 });
  };

  render() {
    const { imageGallery } = this.props;
    // console.log(imageGallery);

    return (
      imageGallery !== 0 && (
        <button
          type="submit"
          className={css.Button}
          onClick={this.handleSubmit}
        >
          Load more
        </button>
      )
    );
  }
}

export default Button;
