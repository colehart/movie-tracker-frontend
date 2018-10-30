import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../actions';
import userIcon from '../../assets/images/margot.png';

const Nav = (props) => {
  const { userLoggedIn, removeUser } = props

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
      <NavLink to="/login" className={userLoggedIn ? "hidden" : "login-btn"}>
        <img
          className="login-icon"
          src={ userIcon }
          alt='Click here to login'/>
        <p className="login-text">
          LOGIN
        </p>
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
  userLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);