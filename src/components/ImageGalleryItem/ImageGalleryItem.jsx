import { Component } from "react";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    const { imageGallery } = this.props;
    // console.log(imageGallery.length);
    return (
      imageGallery.length !== 0 &&
      imageGallery.map((image) => (
        <li key={image.id} className={css.ImageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.webformatURL}
            className={css.ImageGalleryItemImage}
          />
        </li>
      ))
    );
  }
}

export default ImageGalleryItem;
