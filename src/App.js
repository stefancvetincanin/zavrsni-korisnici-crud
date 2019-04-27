import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import UsersList from './components/UsersList'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Footer from './components/Footer'

class App extends Component {
  state = {
    test: 'Hello React'
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route path='/' exact render={(props) => (
              <UsersList {...props} data={this.state.test}/>
            )}/>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={CreateUser}></Route>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;