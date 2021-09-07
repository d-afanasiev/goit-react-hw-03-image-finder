import { Component } from "react";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  getSrc = (e) => {
    console.log(e.target.dataset.src);
  };

  render() {
    const { imageGallery } = this.props;
    console.log(imageGallery);
    return (
      imageGallery.length !== 0 &&
      imageGallery.map((image) => (
        <li key={image.id} className={css.ImageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            data-src={image.largeImageURL}
            className={css.ImageGalleryItemImage}
            onClick={this.getSrc}
          />
        </li>
      ))
    );
  }
}

export default ImageGalleryItem;
