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
    authToken: '',
    loginName: '',
    linkActive: 1
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

  logIn = (authHeader) => {
    this.setState({
      isLoggedIn: true,
      authToken: authHeader
    })
  }

  logOut = () => {
    this.setState({
      isLoggedIn: false,
      authToken: ''
    })
  }

  changeLinkActive = num => {
    this.setState({
      linkActive: num
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Nav 
            linkActive={this.state.linkActive}
            changeLinkActive={this.changeLinkActive}
          />
          <Route path='/zavrsni-korisnici-crud/' exact render={(props) => (
            <UsersList {...props} 
              users={this.state.users}
              isLoading={this.state.isLoading}
              deleteUser={this.deleteUser}
              authToken={this.state.authToken}
              isLoggedIn={this.state.isLoggedIn}
              changeLinkActive={this.changeLinkActive}
            />
          )}/>
          <Route path="/zavrsni-korisnici-crud/login" exact render={(props) => (
            <Login {...props}
              isLoggedIn={this.state.isLoggedIn}
              logIn={this.logIn}
              logOut={this.logOut}
              changeLinkActive={this.changeLinkActive}
            />
          )}/>
          <Route path="/zavrsni-korisnici-crud/register" exact render={(props) => (
            <CreateUser {...props} 
              usersLength={this.getHighestId()}
              isLoggedIn={this.state.isLoggedIn}
              authToken={this.state.authToken}
              createUser={this.createUser}
              changeLinkActive={this.changeLinkActive}
            />
          )}/>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;