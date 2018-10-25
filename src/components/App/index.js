import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as API from '../../utils';
import apiKey from '../../API-key.js';
import { addMovies } from '../../actions';
import MovieContainer from '../MovieContainer';
import Nav from '../Nav';
import wesIcon from '../../assets/images/wes.png';
import './App.css';

export class App extends Component {
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

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

App.propTypes = {
  addMovies: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(App);
