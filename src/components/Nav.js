import React from 'react' // eslint-disable-next-line
import { BrowserRouter as Route, Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Users list</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Create User</Link></li>
        </ul>
      </nav>
    </header>
  )
}