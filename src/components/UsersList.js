import React from 'react'
import User from './User'
import UsersNotFound from './UsersNotFound'
import Modal from './Modal'
import { compareNameAsc, compareNameDsc, compareIdAsc, compareIdDsc } from '../utils/helpers'
import Loader from '../images/loader.gif'

export default class UsersList extends React.Component {
  state = {
    users: this.props.users,
    usersWorking: this.props.users,
    searchField: '',
    searchType: 'text',
    modalId: 0,
    displayModal: false,
    userModal: {},
    inputType: 'text'
  }

  componentDidUpdate(prevProps) {
    if (this.props.users !== prevProps.users) {
      this.setState({
        users: this.props.users,
        usersWorking: this.props.users
      })
    }
  }

  // sort functions
  sortIdDsc = () => {
    this.setState({
      usersWorking: this.state.users.sort(compareIdDsc)
    })
  }
  sortNameAsc = () => {
    this.setState({
      usersWorking: this.state.users.sort(compareNameAsc)
    })
  }

  sortNameDsc = () => {
    this.setState({
      usersWorking: this.state.users.sort(compareNameDsc)
    })
  }

  sortIdAsc = () => {
    this.setState({
      usersWorking: this.state.users.sort(compareIdAsc)
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  // Modal functionality
  getModalId = (modalFromUser) => {
    let temp = {}
    this.state.users.forEach(function (element) {
      if (element.userId === modalFromUser)
        temp = element
    })
    this.setState({
      userModal: temp,
      modalId: modalFromUser,
      displayModal: true
    })
  }

  closeModal = () => {
    this.setState({
      displayModal: false
    })
  }

  deleteUser = (userId) => {
    alert("Korisnik sa ID: " + userId + " ce biti obrisan!")
    let usersDelete =
      this.state.users.filter(x => x.userId !== userId)
    this.setState({
      usersWorking: usersDelete,
      users: usersDelete
    })
  }

  render() {
    // Search functionality and mapping components
    let displayUsers = []
    const pattern = new RegExp(this.state.searchField, "i")
    if (this.state.searchType === 'text') {
      displayUsers = this.state.usersWorking
        .filter(x => (x.name.first + ' ' + x.name.last).match(pattern))
        .map((x, i) => {
          return (
            <User user={x} key={i} onClickUser={this.getModalId} />
          )
        })
    } else {
      displayUsers = this.state.usersWorking
        .filter(x => (String(x.userId)).match(pattern))
        .map((x, i) => {
          return (
            <User user={x} key={i} onClickUser={this.getModalId} />
          )
        })
    }
    
    if (displayUsers === undefined || displayUsers.length === 0)
      displayUsers = <UsersNotFound />

    // Until the data is received from the API, display loader
    if (this.props.isLoading)
      return (
        <main className="container loader">
          <img src={Loader} alt="Loading data" width="50" />
        </main>
      )

    return (
      <main className="container">
        <Modal
          user={this.state.userModal}
          displayState={this.state.displayModal}
          onClickClose={this.closeModal}
          onClickDelete={this.deleteUser}
        />
        <h2>List of users</h2>
        <input
          type={this.state.searchType}
          name="searchField"
          onChange={this.handleChange}
          placeholder={"Search..."}
        />
        <select
          value={this.state.searchType}
          name="searchType"
          onChange={this.handleChange}>
          <option value="text">Search by Name</option>
          <option value="number">Search by ID</option>
        </select>
        <br />
        <button onClick={this.sortNameAsc}>Sort by name ascending</button>
        <button onClick={this.sortNameDsc}>Sort by name descending</button>
        <br />
        <button onClick={this.sortIdAsc}>Sort by ID ascending</button>
        <button onClick={this.sortIdDsc}>Sort by ID descending</button>
        <div className="users-list">
          {displayUsers}
        </div>
      </main>
    )
  }
}