import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/images/margot.png'

const Nav = (props) => {
  const { userLoggedIn } = props

  const checkActive = (event) => {
    if(event.target.closest('a').classList.contains('active')) {

    }
  }

  return (
    <nav className="nav-container">
      <NavLink
        to="/favorites"
        className="fav-btn-group"
      >
        <div className="fav-btn-nav" >
          <span className="num-favs">0</span>
          <p
            className={`favorites-text ${checkActive}`}
          >
            FAVORITES
          </p>
        </div>
      </NavLink>
      <NavLink
        to="/login"
        className="login-btn"
      >
        <img
          className="login-icon"
          src={ userIcon }
          alt='Click here to login'/>
        <p
          className='login-text'
        >
          {userLoggedIn ? 'LOGOUT' : 'LOGIN'}
        </p>
      </NavLink>
    </nav>
  )
}


Nav.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired
}

export default Nav;