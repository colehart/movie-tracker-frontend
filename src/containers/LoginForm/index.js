import React, { Component } from 'react'
import * as API from '../../utils'

export class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: ''
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  render() {
    const {email} = this.state

    return(
      <form>
        <h2>Have an account?</h2>
        <input
          className="email-login"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          placeholder="wes@anderson.com"
        />
      </form>
    )
  }
}

export default LoginForm;