import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to='/favorites'>
        <div className='fav-btn'>
          <span className='num-favs'>0</span>
        </div>
      </NavLink>
      <NavLink to='/login' className='login-btn'>
          <img 
            className='login-icon'
            src='' />
          <p className='login-text'></p>
      </NavLink>
    </nav>
  )
}

export default Nav;