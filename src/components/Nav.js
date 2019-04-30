import React from 'react' // eslint-disable-next-line
import { BrowserRouter as Route, Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div>
      <header>
        <h1 className="container" >User database</h1>
        <nav className="container">
          <ul>
            <li>
              <Link to="/zavrsni-korisnici-crud/">
                <div className="link-item"
                  style={{ backgroundColor: props.linkActive === 1 && 'LightSeaGreen', textDecoration: props.linkActive === 1 && 'underline' }}
                >
                  Users list</div>
              </Link>
            </li>
            <li>
              <Link to="/zavrsni-korisnici-crud/login">
                <div className="link-item"
                  style={{ backgroundColor: props.linkActive === 2 && 'LightSeaGreen', textDecoration: props.linkActive === 2 && 'underline' }}
                >Login</div>
              </Link>
            </li>
            <li>
              <Link to="/zavrsni-korisnici-crud/register">
                <div className="link-item"
                  style={{ backgroundColor: props.linkActive === 3 && 'LightSeaGreen', textDecoration: props.linkActive === 3 && 'underline' }}
                >Create User</div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}