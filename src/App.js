import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import UsersList from './components/UsersList'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Router>
          <Nav />
          <Route path="/" exact component={UsersList}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={CreateUser}></Route>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;