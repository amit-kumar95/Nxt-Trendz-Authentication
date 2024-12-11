import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onSubmitLoginFrom = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="homeContainers">
        <div className="containing">
          <img
            className="clotheImgs"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
          />
        </div>

        <div className="containers">
          <img
            className="logoImgs"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <form onSubmit={this.onSubmitLoginFrom}>
            <label className="labelStl" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              onChange={this.onChangeUsername}
              className="inputSlt"
              value={username}
              type="text"
              id="username"
            />
            <br />
            <br />
            <label className="labelStl" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              onChange={this.onChangePassword}
              value={password}
              className="inputSlt"
              type="password"
              id="password"
            />
            <br />
            <br />
            <button className="btnSubmit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
