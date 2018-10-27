import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addUser } from '../../actions';
import * as API from '../../utils'
import './LoginForm.css'

export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      isSigningUp: false
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  toggleSigningUp = () => {
    this.setState({isSigningUp: !this.state.isSigningUp})
  }

  render() {
    const { isSigningUp, email, password } = this.state

    return(
      <form onSubmit={this.handleSubmit}>
        <h2>
          { isSigningUp ? 'ENLIST IN TEAM ZISSOU' : 'HAVE AN ACCOUNT?' }
        </h2>
        <div className="input-container">
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
        <button
          className="submit-login"
          onClick={this.handleSubmit}
        >
          { isSigningUp ? 'CREATE ACCOUNT' : 'LOGIN' }
        </button>
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
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addUser: (email, password, id) => dispatch(addUser(email, password, id))
})

LoginForm.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(LoginForm);