import { Component } from "react";
import css from "./ImageGallery.module.css";

class ImageGallery extends Component {
  render() {
    const { children } = this.props;
    return <ul className={css.ImageGallery}>{children}</ul>;
  }
}

export default ImageGallery;
