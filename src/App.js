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
    users: [],
    isLoggedIn: false,
    authToken: ''
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

  deleteUser = (userId) => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(x => x.userId !== userId)
      }
    })
  }

  createUser = (newUser) => {
    let temp = this.state.users
    temp.push(newUser)
    this.setState({
      users: temp
    })
  }

  getHighestId = () => {
    let highestId = 0
    this.state.users.forEach(element => {
      if(element.userId > highestId)
        highestId = element.userId
    });
    highestId++
    return highestId
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
              deleteUser={this.deleteUser}
              authToken={this.state.authToken}
            />
          )}/>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact render={(props) => (
            <CreateUser {...props} 
              usersLength={this.getHighestId()}
              isLoggedIn={this.state.isLoggedIn}
              authToken={this.state.authToken}
              createUser={this.createUser}
            />
          )}/>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;