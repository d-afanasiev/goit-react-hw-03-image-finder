import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    images: [],
  };

  getImages = (data) => {
    this.setState({ images: data });
    console.log(data);
    console.log(this.state.images);
  };

  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.getImages} />
        <ImageGallery>
          <ImageGalleryItem imageGallery={images} />
        </ImageGallery>
        <Button imageGallery={images} />
      </div>
    );
  }
}

export default App;
