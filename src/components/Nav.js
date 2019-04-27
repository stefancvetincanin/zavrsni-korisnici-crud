import React from 'react' // eslint-disable-next-line
import { BrowserRouter as Route, Link } from 'react-router-dom'

export default class Nav extends React.Component {
  state = {
    liActive1: true,
    liActive2: false,
    liActive3: false
  }

  linkClick1 = () => {
    this.setState({
      liActive1: true,
      liActive2: false,
      liActive3: false
    })
  }

  linkClick2 = () => {
    this.setState({
      liActive1: false,
      liActive2: true,
      liActive3: false
    })
  }

  linkClick3 = () => {
    this.setState({
      liActive1: false,
      liActive2: false,
      liActive3: true
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="container" >User database</h1>
          <nav className="container">
          <ul>
            <li>
              <Link to="/">
                <div className="link-item" 
                style={{backgroundColor: this.state.liActive1 && 'LightSeaGreen', textDecoration:  this.state.liActive1 && 'underline'}} 
                onClick={this.linkClick1}>Users list</div>
              </Link>
            </li>
            <li>
              <Link to="login">
                <div className="link-item" 
                  style={{backgroundColor: this.state.liActive2 && 'LightSeaGreen', textDecoration:  this.state.liActive2 && 'underline'}} 
                  onClick={this.linkClick2}>Login</div>
              </Link>
            </li>
            <li>
              <Link to="register">
                <div className="link-item" 
                style={{backgroundColor: this.state.liActive3 && 'LightSeaGreen', textDecoration:  this.state.liActive3 && 'underline'}} 
                onClick={this.linkClick3}>Create User</div>
              </Link>
            </li>
          </ul>
        </nav>
        </header>
      </div>
    )
  }
}