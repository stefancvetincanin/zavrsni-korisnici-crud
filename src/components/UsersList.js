import React from 'react'
import usersBase from '../data/user-base.json'
import User from './User'
import UsersNotFound from './UsersNotFound'
import Modal from './Modal'
import { compareNameAsc, compareNameDsc, compareIdAsc, compareIdDsc } from '../utils/helpers'

// experimenting with localStorage
if(localStorage.getItem("usersLocal") === undefined || localStorage.getItem("usersLocal") === null) {
  localStorage.setItem("usersLocal", JSON.stringify(usersBase))
}

export default class UsersList extends React.Component {
  state = {
    users: usersBase.results,
    usersWorking: usersBase.results,
    filterById: null,
    searchMode: 0,
    modalId: 0,
    displayModal: false,
    userModal: {},
    inputType: 'text'
  }

  // sort functions
  sortIdDsc = () => {
    const sorted = this.state.users.sort(compareIdDsc)
    this.setState({
      usersWorking: sorted
    })
  }
  sortNameAsc = () => {
    const sorted = this.state.users.sort(compareNameAsc)
    this.setState({
      usersWorking: sorted
    })
  }

  sortNameDsc = () => {
    const sorted = this.state.users.sort(compareNameDsc)
    this.setState({
      usersWorking: sorted
    })
  }

  sortIdAsc = () => {
    const sorted = this.state.users.sort(compareIdAsc)
    this.setState({
      usersWorking: sorted
    })
  }

  // search field functionality
  inputFilter = (e) => {
    if (e.target.value === ''){
      this.setState({
        usersWorking: this.state.users
      })
    } else {
      if (this.state.searchMode === 1) {
        this.filterById = Number(e.target.value)
        console.log(this.filterById)
        console.log(e.target.value)
        const sorted = this.state.users.filter(x => x.userId === this.filterById)
        this.setState({
          usersWorking: sorted
        })
      } else {
        this.filterById = e.target.value
        let patt = new RegExp(this.filterById, 'i')
        console.log(this.filterById)
        console.log(e.target.value)
        const sorted = this.state.users.filter(
          x => patt.test(x.name.first + ' ' + x.name.last)
        );
        this.setState({
          usersWorking: sorted
        });
      }
    }
  }

  changeSearchMode = (e) => {
    document.getElementById("inputTest").value = ''
    let tempInputType = ''
    if(e.target.selectedIndex)
      tempInputType = 'number'
    else
      tempInputType = 'text'
    this.setState({
      searchMode: Number(e.target.selectedIndex),
      inputType: tempInputType
    })    
  }

  getModalId = (modalFromUser) => {
    let temp = {}
    this.state.users.forEach(function (element) {
      if(element.userId === modalFromUser)
        temp = element
    })
    // for( let i = 0; i < this.state.users.length; i++) {
    //   if(this.state.users[i].userId === modalFromUser)
    //     temp = this.state.users[i]
    // }
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
    let displayUsers = this.state.usersWorking.map((x, i) => {
      return (
        <User user={x} key={i} onClickUser={this.getModalId}/>
      )
    })
    if(displayUsers === undefined || displayUsers.length === 0)
      displayUsers = <UsersNotFound />

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
          id="inputTest" 
          onChange={this.inputFilter} 
          type={this.state.inputType} 
          placeholder="Search..."
        />
        <select onChange={this.changeSearchMode}> 
          <option>Search by Name</option>
          <option>Search by ID</option>
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