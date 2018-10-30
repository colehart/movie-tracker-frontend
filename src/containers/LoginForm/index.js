import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FlashMessage from 'react-flash-message';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import * as API from '../../utils';
import './LoginForm.css';

export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      isSigningUp: false,
      errorMessage: ''
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value})
  }

  handleSubmit = async (event) => {
    const { isSigningUp } = this.state;

    if (isSigningUp) {
      const result = await this.createNewUser()

    console.log(result)
      await this.checkResponse(isSigningUp, result, event)
    } else {
      const result = await this.loginUser();
      
    console.log(result)
      await this.checkResponse(isSigningUp, result, event)
    }
    this.resetForm()
  }

  checkResponse = (isSigningUp, result, event) => {
    if (isSigningUp && typeof result === 'object') {
      this.props.setUser(result.id)
    } else if (!isSigningUp && typeof result === 'object') {
      this.props.setUser(result.data.id)
    } else if (isSigningUp){
      event.preventDefault()
      this.setState({
        errorMessage: result
      }) 
    } else {
      event.preventDefault()
      this.setState({
        errorMessage: result
      }) 
    }
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      isSigningUp: false
    })
  }

  createNewUser = async () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    return await API.addUser(user);
  }

  loginUser = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    return await API.loginUser(user)
  }

  toggleSigningUp = (event) => {
    event.preventDefault()
    this.setState({isSigningUp: !this.state.isSigningUp})
  }

  render() {
    const { name, isSigningUp, email, password, errorMessage } = this.state

    return(
      <div>
        <FlashMessage 
          duration={5000}
          className={errorMessage ? '' : 'hidden'}>
          { errorMessage }
        </FlashMessage>
        <form onSubmit={ this.handleSubmit }>
          <h2>
            { isSigningUp ? 'ENLIST IN TEAM ZISSOU' : 'HAVE AN ACCOUNT?' }
          </h2>
          <div className="input-container">
             <input
              className={ isSigningUp ? "name-login" : "hidden" }
              name="name"
              value={name}
              onChange={ this.handleInputChange }
              placeholder='Klaus'
            />
            <input
              className="email-login"
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              placeholder= {
                isSigningUp ? 'klaus@daimler.net' : "wes@anderson.com"
              }
            />
            <input
              className="password-login"
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Type password here"
            />
          </div>
          <NavLink exact to='/'>
            <button
              className="submit-login"
              onClick={this.handleSubmit}>
              { isSigningUp ? 'CREATE ACCOUNT' : 'LOGIN' }
            </button>
          </NavLink>
          <div className="sign-up-container">
            <h3>
              { isSigningUp ? 'ERM, NVM...' : 'NEED AN ACCOUNT?' }
            </h3>
            <button
              className="sign-up-btn"
              onClick={this.toggleSigningUp}
            >
              { isSigningUp ? 'CANCEL SIGN UP' : 'SIGN UP' }
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setUser: (id) => dispatch(setUser(id))
})

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(LoginForm);