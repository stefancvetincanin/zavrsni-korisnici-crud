import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.scss'
import Nav from './components/Nav'
import UsersList from './components/UsersList'
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Footer from './components/Footer'
import SendingData from './components/SendingData'
import ServerError from './components/ServerError'

class App extends Component {
  state = {
    isLoading: false,
    users: [],
    isLoggedIn: true,
    authToken: '',
    loginName: '',
    linkActive: 1,
    isSendingData: false,
    showNavMobile: false,
    serverError: false
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
      .catch(() => {
        this.showServerError()
      })

    window.addEventListener('scroll', function() {
      if(document.documentElement.scrollTop >= 200) 
        document.getElementById("back-to-top").classList.add("btt-visible")
      else 
        document.getElementById("back-to-top").classList.remove("btt-visible")
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

  editUser = (editedUser, editedUserId) => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          if(user.userId === editedUserId)
            return editedUser
          return user
        })
      }
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

  isSendingData = status => {
    this.setState({
      isSendingData: status
    })
  }

  toggleNavMobile = () => {
    this.setState(prevState => {
      return {
        showNavMobile: !prevState.showNavMobile
      }
    })
  }

  hideNavMobile = () => {
    this.setState({
      showNavMobile: false
    })
  }

  hideServerError = () => {
    this.setState({
      serverError: false
    })
  }

  showServerError = () => {
    this.setState({
      serverError: true
    })
  }

  render() {
    return (
      <div className="grid-container">
        <Router>
          <Nav 
            linkActive={this.state.linkActive}
            changeLinkActive={this.changeLinkActive}
            logOut={this.logOut}
            isLoggedIn={this.state.isLoggedIn}
            toggleNavMobile={this.toggleNavMobile}
            showNavMobile={this.state.showNavMobile}
            hideNavMobile={this.hideNavMobile}
          />
          <Route path='/zavrsni-korisnici-crud/' exact 
            render={(props) => (
            <UsersList {...props} 
              users={this.state.users}
              isLoading={this.state.isLoading}
              deleteUser={this.deleteUser}
              authToken={this.state.authToken}
              isLoggedIn={this.state.isLoggedIn}
              changeLinkActive={this.changeLinkActive}
              editUser={this.editUser}
              isSendingData={this.isSendingData}
              showServerError={this.showServerError}
            />
          )}/>
          <Route path="/zavrsni-korisnici-crud/login" exact 
            render={(props) => (
            <Login {...props}
              isLoggedIn={this.state.isLoggedIn}
              logIn={this.logIn}
              logOut={this.logOut}
              changeLinkActive={this.changeLinkActive}
              isSendingData={this.isSendingData}
              showServerError={this.showServerError}
            />
          )}/>
          <Route path="/zavrsni-korisnici-crud/register" exact 
            render={(props) => (
            <CreateUser {...props} 
              usersLength={this.getHighestId()}
              isLoggedIn={this.state.isLoggedIn}
              authToken={this.state.authToken}
              createUser={this.createUser}
              changeLinkActive={this.changeLinkActive}
              isSendingData={this.isSendingData}
              showServerError={this.showServerError}
            />
          )}/>
        </Router>
        <Footer />
        <div 
          style={{display: !this.state.isSendingData && 'none'}}>
            <SendingData />
        </div>
        <div style={{display: !this.state.serverError && 'none'}}>
          <ServerError hideServerError={this.hideServerError}/>
        </div>
        <a id="back-to-top" className="btt" href="#top">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    )
  }
}

export default App;