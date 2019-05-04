import React from 'react'
import User from './User'
import UsersNotFound from './UsersNotFound'
import Modal from './Modal'
import { compareNameAsc, compareNameDsc, compareIdAsc, compareIdDsc } from '../utils/helpers'
import Loader from '../images/loader.gif'
import Pagination from './Pagination'

export default class UsersList extends React.Component {
  state = {
    users: this.props.users,
    usersWorking: this.props.users,
    searchField: '',
    searchType: 'text',
    modalId: 0,
    displayModal: false,
    userModal: {},
    inputType: 'text',
    usersPerPage: 10,
    currentPage : 1
  }

  componentDidMount() {
    this.props.changeLinkActive(1)
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

  // Controlled inputs
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
      currentPage: 1
    })
  }

  // Modal functionality
  getModalId = (modalFromUser) => {
    let temp = {}
    this.state.users.forEach((element) => {
      if (element.userId === modalFromUser)
        temp = element
    })
    this.setState({
      userModal: temp,
      modalId: modalFromUser,
      displayModal: true
    })
    document.querySelector("body").classList.add("stop-scroll")
  }

  closeModal = () => {
    this.setState({
      displayModal: false
    })
    document.querySelector("body").classList.remove("stop-scroll")
  }

  handlePageChange = page => {
    this.setState({
      currentPage: Number(page)
    })
  }

  render() {
    // Search functionality and mapping components
    let displayUsers = this.state.usersWorking
    const pattern = new RegExp(this.state.searchField, "i")
    if (this.state.searchType === 'text') {
      displayUsers = displayUsers
        .filter(x => (x.name.first + ' ' + x.name.last).match(pattern))
        .map((x, i) => {
          return (
            <User user={x} key={i} getModalId={this.getModalId} />
          )
        })
    } else {
      displayUsers = displayUsers
        .filter(x => String(x.userId).match(pattern))
        .map((x, i) => {
          return (
            <User user={x} key={i} getModalId={this.getModalId} />
          )
        })
    }

    let displayUsersPaginated = displayUsers.filter((element, index) => {
      return index < this.state.currentPage * this.state.usersPerPage && index >= (this.state.currentPage * this.state.usersPerPage - this.state.usersPerPage)
    })

    if (displayUsersPaginated === undefined || displayUsersPaginated.length === 0)
      displayUsersPaginated = <UsersNotFound />

    // Display loader until the API responds
    if (this.props.isLoading)
      return (
        <main className="container loader">
          <img src={Loader} alt="Loading data" width="50" />
        </main>
      )

    return (
      <main>
        <Modal
          user={this.state.userModal}
          displayModal={this.state.displayModal}
          closeModal={this.closeModal}
          deleteUser={this.props.deleteUser}
          isLoggedIn={this.props.isLoggedIn}
          editUser={this.props.editUser}
          authToken={this.props.authToken}
          isSendingData={this.props.isSendingData}
          showServerError={this.props.showServerError}
        />
        <div 
          style={{filter: this.state.displayModal && "blur(2px)"}}
          className="container">
          <div className="users-list-form">
            <h2>List of users</h2>
            <input
              type={this.state.searchType}
              name="searchField"
              onChange={this.handleChange}
              placeholder={`Search by ${this.state.searchType === "text" ? "Name" : "User ID"}...`}
            />
            <select
              value={this.state.searchType}
              name="searchType"
              onChange={this.handleChange}>
              <option value="text">Search by Name</option>
              <option value="number">Search by ID</option>
            </select>
            <div className="sort-container">
              <div>Sort by name: </div>
              <i className="fas fa-arrow-alt-circle-up sort-button" onClick={this.sortNameAsc}></i>
              <i className="fas fa-arrow-alt-circle-down sort-button" onClick={this.sortNameDsc}></i>
            </div>
            <div className="sort-container">
              <div>Sort by ID: </div>
              <i className="fas fa-arrow-alt-circle-up sort-button" onClick={this.sortIdAsc}></i>
              <i className="fas fa-arrow-alt-circle-down sort-button" onClick={this.sortIdDsc}></i>
            </div>
          </div>
          <div className="select-users-container">
            <span>Select number of users to display:&nbsp;</span>
            <select
              name="usersPerPage"
              value={this.state.usersPerPage}
              onChange={this.handleChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="pagination-container" 
            style={{display: (displayUsers.length <= this.state.usersPerPage) ? "none" : null}}>
            <Pagination 
              usersPerPage={this.state.usersPerPage}
              totalUsers={displayUsers.length}
              handlePageChange={this.handlePageChange}
              currentPage={this.state.currentPage}/>
          </div>
          <div style={{display: (displayUsers.length <= this.state.usersPerPage) ? 'none' : null, padding: '0px 10px'}}>
            Results found: {displayUsers.length}
          </div>
          <div className="users-list">
            {displayUsersPaginated}
          </div>
          <div className="pagination-container"
            style={{display: (displayUsers.length <= this.state.usersPerPage) ? "none" : null}}>
            <Pagination 
              usersPerPage={this.state.usersPerPage}
              totalUsers={displayUsers.length}
              handlePageChange={this.handlePageChange}
              currentPage={this.state.currentPage}/>
          </div>
          <div className="select-users-container">
            <span>Select number of users to display:&nbsp;</span>
            <select
              name="usersPerPage"
              value={this.state.usersPerPage}
              onChange={this.handleChange}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </main>
      
    )
  }
}