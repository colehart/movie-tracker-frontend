import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser, filterMovies } from '../../actions';
import userIcon from '../../assets/images/margot.png';
import './Nav.css';

export const Nav = (props) => {
  const { userLoggedIn, removeUser, movies, filterMovies } = props

  const handleHover = (event) => {
    if(!event.target.classList.contains('active')) {
      event.target.classList.add('active')
    } else {
      event.target.classList.remove('active')
    }
  }

  return (
    <nav className="nav-container">
      <NavLink
        onClick={() => filterMovies(movies)}
        to="/favorites"
        className="fav-btn-group"
      >
        <div
          className="fav-btn-nav"
          onMouseOver={handleHover}
          onMouseOut={handleHover}
        >
          <span className="num-favs">0</span>
          <p
            className={`favorites-text`}
          >
            FAVORITES
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/login"
        className={userLoggedIn ? "hidden" : "show"}
      >
        <div
          className="login-btn"
          onMouseOver={handleHover}
          onMouseOut={handleHover}
        >
          <img
            className="login-icon"
            src={ userIcon }
            alt='Click here to login'/>
          <p className="login-text">
            LOGIN
          </p>
        </div>
      </NavLink>
      <NavLink
        className={userLoggedIn ? "logout-btn" : "hidden"}
        onClick={removeUser}
        to='/'
      >
        <img
          className="login-icon"
          src={ userIcon }
          alt='Click here to login'/>
        <p className="login-text">
          LOGOUT
        </p>
      </NavLink>
    </nav>
  )
}

export const mapStateToProps = (state) => ({
  userLoggedIn: state.user.id,
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser()),
  filterMovies: (movies) => dispatch(filterMovies(movies))
})

Nav.propTypes = {
  removeUser: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);