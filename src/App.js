import React, { Component } from 'react';

import logo from './logo.svg';
import NavBar from './NavBar';

import './App.css';
import './NavBar.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavBar />
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
