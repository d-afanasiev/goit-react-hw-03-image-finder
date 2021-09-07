import { Component } from "react";
import "./App.css";
import axios from "axios";
import { Notify } from "notiflix";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Button from "./components/Button/Button";

class App extends Component {
  state = {
    images: [],
    name: "",
    page: null,
    showLoader: false,
    hits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.page !== prevState.page
    ) {
      this.loaderToggle(true);
      const API = `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=23262406-c7298f4dbbc93d98b496e6608&image_type=photo&orientation=horizontal&per_page=12`;
      axios
        .get(API)
        .then((images) => {
          // console.log(images);
          // console.log(this.state);

          if (images.data.hits.length === 0) {
            Notify.failure(
              "Sorry, there are no images matching your search query. Please try again."
            );
          }

          this.setState((prevState) => {
            return {
              images: [...prevState.images, ...images.data.hits],
              hits: prevState.hits + images.data.hits.length,
            };
          });

          if (this.state.hits >= images.data.totalHits) {
            this.setState({ hits: 0 });
          }
          this.loaderToggle(false);
        })
        .catch((error) => {
          Notify.failure(
            "Sorry, there are no images matching your search query. Please try again."
          );
        });
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  getImages = (data) => {
    data.image
      ? this.setState({
          images: [],
          name: data.image,
          page: data.page,
          hits: 0,
        })
      : this.setState({ page: data.page, hits: 0 });
    // console.log(data);
    // console.log(this.state.images);
  };

  loaderToggle = (status) => {
    // console.log(status);
    return this.setState({ showLoader: status });
  };

  render() {
    const { images, page, hits } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.getImages} />
        <ImageGallery>
          <ImageGalleryItem imageGallery={images} />
        </ImageGallery>
        {this.state.showLoader && (
          <Loader
            type="Audio"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={500}
            className="Loader"
          />
        )}
        <Button imageGallery={hits} onSubmit={this.getImages} page={page} />
      </div>
    );
  }
}

export default App;
