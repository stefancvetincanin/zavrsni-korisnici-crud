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
    isLoading: false,
    users: []
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    fetch("https://randomuser.me/api/?results=40")
      .then(response => response.json())
      .then(data => {
        for(let index = 0; index < data.results.length; index++) {
          data.results[index].userId = index + 1
        }
        this.setState({
          users: data.results,
          isLoading: false
        })
      })
  }

  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Route path='/' exact render={(props) => (
              <UsersList {...props} 
                users={this.state.users}
                isLoading={this.state.isLoading}
              />
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