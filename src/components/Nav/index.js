import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/images/margot.png'

const Nav = () => {
  return (
    <nav className="nav-container">
      <NavLink
        className="fav-btn-group"
        to="/favorites">
        <div className="fav-btn-nav">
          <span className="num-favs">0</span>
        <p className="favorites-text">FAVORITES</p>
        </div>
      </NavLink>
      <NavLink to="/login" className="login-btn">
        <img
          className="login-icon"
          src={ userIcon } />
        <p className="login-text">LOGIN</p>
      </NavLink>
    </nav>
  )
}

export default Nav;