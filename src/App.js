import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import UsersList from './components/UsersList'
import Login from './components/Login'
import CreateUser from './components/CreateUser'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Nav />
          <Route path="/" exact component={UsersList}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={CreateUser}></Route>
        </Router>
      </div>
    );
  }
}

export default App;

// NPM EJECT
