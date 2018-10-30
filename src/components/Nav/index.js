import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import userIcon from '../../assets/images/margot.png'

export class Nav extends Component {
  constructor() {
    super()
    this.state = {
      isActive: true,
    }
  }

  handleHover = (event) => {
    debugger
    if(event.target.classList.contains('active'))
      this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    const { userLoggedIn } = this.props
    const { isActive } = this.state

    return (
      <nav className="nav-container">
        <NavLink
          className="fav-btn-group"
          to="/favorites">
          <div
            className="fav-btn-nav"
            onMouseOver={this.handleHover}
            onMouseOut={this.handleHover}
          >
            <span className="num-favs">0</span>
            <p
              className={`fav-text ${isActive ? 'hidden' : 'slide'}`}
            >
              FAVORITES
            </p>
          </div>
        </NavLink>
        <NavLink to="/login"
          className="login-btn"
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHover}
        >
          <img
            className="login-icon"
            src={ userIcon }
            alt='Click here to login'/>
          <p
            className={`login-text ${isActive ? 'hidden' : 'slide'}`}
          >
            {userLoggedIn ? 'LOGOUT' : 'LOGIN'}
          </p>
        </NavLink>
      </nav>
    )
  }
}


Nav.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired
}

export default Nav;