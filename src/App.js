import { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";

class App extends Component {
  state = {
    images: [],
  };

  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
