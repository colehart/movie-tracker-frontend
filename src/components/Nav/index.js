import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/images/margot.png'

const Nav = () => {
  return (
    <nav className="nav-container">
      <NavLink 
        className="nav-link" 
        to="/favorites">
        <div className="fav-btn">
          <span className="num-favs">0</span>
        </div>
      </NavLink>
      <NavLink to="/login" className="login-btn">
          <img 
            className="login-icon"
            src={ userIcon } />
          <p className="login-text">Login</p>
      </NavLink>
    </nav>
  )
}

export default Nav;