import React from 'react' // eslint-disable-next-line
import { BrowserRouter as Route, Link } from 'react-router-dom'

export default function Nav(props) {
  return (
      <header id="top">
        <div className="container">
          <div className="header-container">
            <div className="banner-container-large">
              <Link to='/zavrsni-korisnici-crud/'>
                <h1>USER DATABASE<br />A CODE ASSIGNMENT</h1>
              </Link>
            </div>
            <div className="banner-container-small">
              <Link to='/zavrsni-korisnici-crud/'>
                <h1>CRUD DATABASE</h1>
              </Link>
            </div>
            <div className="nav-button-small">
              <i 
                onClick={props.toggleNavMobile}
                className="fas fa-bars"></i>
            </div>
            <div 
              className="hide-log-out-mobile"
              style={{display: props.isLoggedIn ? null : 'none'}}>
              <span>You are logged in.&nbsp;</span>
              <button onClick={() => {props.logOut()}}>
                Log out
              </button>
            </div>
          </div>
        </div>
        
        <nav className="container">
          <ul style={{display: props.showNavMobile && "block"}}>
            <li onClick={props.hideNavMobile}>
              <Link to="/zavrsni-korisnici-crud/">
                <div className="link-item"
                  style={{ backgroundColor: props.linkActive === 1 && 'LightSeaGreen', textDecoration: props.linkActive === 1 && 'underline' }}
                >
                  List of users</div>
              </Link>
            </li>
            <li onClick={props.hideNavMobile}>
              <Link to="/zavrsni-korisnici-crud/login">
                <div className="link-item"
                  style={{ backgroundColor: props.linkActive === 2 && 'LightSeaGreen', textDecoration: props.linkActive === 2 && 'underline' }}
                >Log in</div>
              </Link>
            </li>
            <li onClick={props.hideNavMobile} id="responsive-log-out">
              <div 
                className="link-item" 
                style={{display: props.isLoggedIn ? null : 'none'}} 
                onClick={() => props.logOut()}
              >
                Log out
              </div>
            </li>
            <li onClick={props.hideNavMobile}>
              <Link to="/zavrsni-korisnici-crud/register">
                <div className="link-item"
                  style={{ backgroundColor: props.linkActive === 3 && 'LightSeaGreen', textDecoration: props.linkActive === 3 && 'underline' }}
                >Add a User</div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}