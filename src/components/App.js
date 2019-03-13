import React, { Component } from 'react';
import Movies from "./Movies";
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Search for Movies
        </header>
        <Movies />
      </div>
    );
  }
}

export default App;