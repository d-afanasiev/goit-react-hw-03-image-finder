import { Component } from "react";
import css from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    image: "",
  };

  handleChange = (e) => {
    this.setState({
      image: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const API = `https://pixabay.com/api/?q=${this.state.image}&page=1&key=23262406-c7298f4dbbc93d98b496e6608&image_type=photo&orientation=horizontal&per_page=12`;
    const result = fetch(API)
      .then((images) => images.json())
      .then((data) => data.hits);
    console.log(JSON.parse(result));
    // const totalState = {
    //   name: this.state.name,
    //   number: this.state.number,
    // };

    // this.props.formSubmitHandler(totalState);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
