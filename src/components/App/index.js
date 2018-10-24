import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav';
import wesIcon from '../../assets/images/wes-logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">
            <img
              src={ wesIcon }
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
