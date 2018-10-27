import React, { Component } from 'react'
import * as API from '../../utils'
import './LoginForm.css'

export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleSignUp = (event) => {
    event.preventDefault()
  }

  render() {
    const { email, password } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <h2>HAVE AN ACCOUNT?</h2>
        <div className="input-container">
          <input
            className="email-login"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="wes@anderson.com"
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
        <button
          className="submit-login"
          onClick={this.handleSubmit}
        >LOGIN
        </button>
        <div className="sign-up-container">
          <h3>NEED AN ACCOUNT?</h3>
          <button
            className="sign-up-btn"
            onClick={this.handleSignUp}
          >
          SIGN UP
          </button>
        </div>
      </form>
    )
  }
}

export default LoginForm;