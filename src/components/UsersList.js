import React, { Component } from 'react'
import usersBase from '../data/user-base.json'
import User from './User'
import Modal from './Modal'
import { compareNameAsc, compareNameDsc, compareIdAsc, compareIdDsc } from '../utils/helpers'

export default class UsersList extends Component {
  state = {
    users: usersBase.results,
    usersWorking: usersBase.results,
    filterById: null,
    searchMode: 0,
    modalId: 0,
    displayModal: false
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

  sortIdDsc = () => {
    const sorted = this.state.users.sort(compareIdDsc)
    this.setState({
      usersWorking: sorted
    })
  }

  inputFilter = (e) => {
    if (e.target.value === ''){
      this.setState({
        usersWorking: this.state.users
      })
    } else {
      if(this.state.searchMode === 1) {
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
    this.setState({
      searchMode: Number(e.target.selectedIndex)
    })    
  }

  getModalId = (modalFromUser) => {
    this.setState({
      modalId: modalFromUser,
      displayModal: true
    })
  }

  render() {
    const displayUsers = this.state.usersWorking.map((x, i) => {
      return (
        <User user={x} key={i} onClickUser={this.getModalId}/>
      )
    })

    if(this.state.displayModal) {
      return (
        <main>
          <Modal user={this.state.usersWorking[this.state.modalId - 1]}/>
          <h2>List of users</h2>
          <input id="inputTest" onChange={this.inputFilter} type="text" placeholder="Search..." />
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
          <div>
            {displayUsers}
          </div>
        </main>
      )
    }
    return (
      <main>
        <h2>List of users</h2>
        <input id="inputTest" onChange={this.inputFilter} type="text" placeholder="Search..." />
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
        <div>
          {displayUsers}
        </div>
      </main>
    );

  }
}