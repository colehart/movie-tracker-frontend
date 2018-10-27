import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as API from '../../utils';
import apiKey from '../../API-key.js';
import { addMovies } from '../../actions';
import MovieContainer from '../MovieContainer';
import Nav from '../../components/Nav';
import LoginForm from '../LoginForm'
import wesIcon from '../../assets/images/wes.png';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const movies = await API.fetchMovies(apiKey)
    await this.props.addMovies(movies)
  }

  render() {
    const { user } = this.props
    return (
      <div className="App">
        <header className="header-container">
          <NavLink to='/' className="logo">
            <img
              src={ wesIcon }
              className="logo-icon"
              alt="An icon of Wes Anderson's face"
            />
            <h1>WesTracker</h1>
          </NavLink>
          <Nav userLoggedIn={user.email ? true : false} />
        </header>
        <Route
          exact path='/'
          component={ MovieContainer }
        />
        <Route
          exact path='/login'
          component={ LoginForm }
        />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

App.propTypes = {
  user: PropTypes.object.isRequired,
  addMovies: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
