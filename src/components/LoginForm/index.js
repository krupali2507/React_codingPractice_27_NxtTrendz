// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    failureMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderLoginForm = () => (
    <>
      <label htmlFor="uname">USERNAME</label>
      <input
        type="text"
        id="uname"
        className="input-element"
        onChange={this.onChangeUsername}
        placeholder="Username"
      />
      <label htmlFor="pwd">PASSWORD</label>
      <input
        type="password"
        id="pwd"
        className="input-element"
        onChange={this.onChangePassword}
        placeholder="Password"
      />
    </>
  )

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = error => {
    this.setState({failureMessage: error})
  }

  onSubmitFormData = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(response)

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {failureMessage} = this.state
    return (
      <div className="login-bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-page-image"
          />
        </div>
        <div className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form className="form" onSubmit={this.onSubmitFormData}>
            {this.renderLoginForm()}
            <button type="submit" className="input-element btn">
              Login
            </button>
          </form>
          <p className="error-message">{failureMessage}</p>
        </div>
      </div>
    )
  }
}

export default LoginForm
