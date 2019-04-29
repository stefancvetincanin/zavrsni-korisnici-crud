import React from 'react' // eslint-disable-next-line
import { BrowserRouter as Route, Link } from 'react-router-dom'

export default class Nav extends React.Component {
  state = {
    liActive1: true,
    liActive2: false,
    liActive3: false
  }

  // This could use some reformatting (not a lot of work needed)
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
    console.log()
    return (
      <div>
        <header>
          <h1 className="container" >User database</h1>
          <nav className="container">
          <ul>
            <li>
              <Link to="/">
                <div className="link-item" 
                  style={{backgroundColor: this.props.linkActive===1 && 'LightSeaGreen', textDecoration: this.props.linkActive===1 && 'underline'}} 
                  onClick={() => {this.props.changeLinkActive(1)}}>Users list</div>
              </Link>
            </li>
            <li>
              <Link to="login">
                <div className="link-item" 
                  style={{backgroundColor: this.props.linkActive===2 && 'LightSeaGreen', textDecoration: this.props.linkActive===2 && 'underline'}}
                  onClick={() => {this.props.changeLinkActive(2)}}>Login</div>
              </Link>
            </li>
            <li>
              <Link to="register">
                <div className="link-item" 
                  style={{backgroundColor: this.props.linkActive===3 && 'LightSeaGreen', textDecoration: this.props.linkActive===3 && 'underline'}}
                  onClick={() => {this.props.changeLinkActive(3)}}>Create User</div>
              </Link>
            </li>
          </ul>
        </nav>
        </header>
      </div>
    )
  }
}