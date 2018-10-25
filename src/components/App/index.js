import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMovies } from '../../actions';
import Nav from '../Nav';
import wesIcon from '../../assets/images/wes.png';
import './App.css';
import * as API from '../../utils';
import apiKey from '../../API-key.js';
import MovieContainer from '../MovieContainer';

class App extends Component {
  async componentDidMount() {
    const movies = await API.fetchMovies(apiKey)
    await this.props.addMovies(movies)
  }

  render() {
    return (
      <div className="App">
        <header className="header-container">
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
        <Route
          exact path='/'
          component={ MovieContainer }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(null, mapDispatchToProps)(App);
