import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser, filterMovies } from '../../actions';
import userIcon from '../../assets/images/margot.png';
import './Nav.css';

export const Nav = (props) => {
  const { userLoggedIn, removeUser, movies, filterMovies } = props

  const setFaveNum = () => {
    const filteredMovies = movies.filter(movie => movie.isFavorite)
    return (filteredMovies.length || 0)
  }

  return (
    <nav className="nav-container">
      <NavLink
        onClick={() => filterMovies(movies)}
        to="/favorites"
        className={userLoggedIn ? "fav-btn-group" : "hidden"}
      >
        <div className="fav-btn-nav">
          <span className="num-favs">{setFaveNum()}</span>
          <p className={`favorites-text`}>
            FAVORITES
          </p>
        </div>
      </NavLink>
      <NavLink
        to={userLoggedIn ? '/' : '/login'}
        className="login-btn"
        onClick={removeUser}
      >
        <img
          className="login-icon"
          src={ userIcon }
          alt='Click here to login'/>
        <p className="login-text">
          {userLoggedIn ? 'LOGOUT' : 'LOGIN'}
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