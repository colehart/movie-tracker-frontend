import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../actions';
import userIcon from '../../assets/images/margot.png';
import './Nav.css';

export const Nav = (props) => {
  const { userLoggedIn, removeUser } = props

  const handleHover = (event) => {
    if(!event.target.classList.contains('active')) {
      console.log(event.target.classList)
      event.target.classList.add('active')
    } else {
      console.log(event.target.classList)
      event.target.classList.remove('active')
    }
  }

  return (
    <nav className="nav-container">
      <NavLink
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
      <button
        className={userLoggedIn ? "logout-btn" : "hidden"}
        onClick={removeUser}
      >
        <img
          className="login-icon"
          src={ userIcon }
          alt='Click here to login'/>
        <p className="login-text">
          LOGOUT
        </p>
      </button>
    </nav>
  )
}

export const mapStateToProps = (state) => ({
  userLoggedIn: state.user.id
})

export const mapDispatchToProps = (dispatch) => ({
  removeUser: () => dispatch(removeUser())
})

Nav.propTypes = {
  removeUser: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);