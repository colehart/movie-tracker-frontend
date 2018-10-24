import React, { Component } from 'react';
import Route from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">
            <img
              src="../assets/images/wes-logo.png"
              className="logo-icon"
              alt="An icon of Wes Anderson's face"
            />
            <h1>WesTracker</h1>
          </div>
          <Nav />
        </header>
        <Route />
      </div>
    );
  }
}

export default App;
