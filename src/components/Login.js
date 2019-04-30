import React from 'react'
import {createAuthToken} from '../utils/helpers'

export default class Login extends React.Component {
  state = {
    username: '', 
    password: ''
  }

  componentDidMount() {
    this.props.changeLinkActive(2)
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleReset = () => {
    this.setState({
      username: '',
      password: ''
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // alert('form submitted!')
    if(this.state.username === 'admin' && this.state.password === 'password') {
      const authToken = createAuthToken()
      this.props.logIn(authToken)
      this.handleReset()
    } else {
      alert('incorrect credentials')
    }    
  }

  render() {
    return(
      <main className="container">
        <form onSubmit={this.handleSubmit}
          style={{display: this.props.isLoggedIn && 'none'}}>
          <h2>Login</h2>
          <h4 title="Username: 'admin', password: 'password'">(mouse-over for hint!)</h4>
          <input 
            type="text" 
            placeholder="Username" 
            name="username" 
            value={this.state.username}
            onChange={this.handleChange}
            required
          /> <br />
          <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password}
            onChange={this.handleChange}
            required
          /> <br />
          <button>Log in</button>
          <input type="reset" onClick={this.handleReset} />
        </form>
        <div style={{display: !this.props.isLoggedIn && 'none'}}>
          <h3>You are logged in</h3>
          <button onClick={() => {this.props.logOut()}}>
            Log out
          </button>
        </div>
      </main>
    )
  }
}