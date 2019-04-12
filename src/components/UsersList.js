import React, { Component } from 'react'
import usersBase from '../data/user-base.json'
import User from './User'
import { compareNameAsc, compareNameDsc, compareIdAsc, compareIdDsc } from '../utils/helpers'

export default class UsersList extends Component {
  state = {
    users: usersBase.results,
    usersBackup: usersBase.results,
    filterID: null,
    searchMode: 0
  }

  sortNameAsc = () => {
    const sorted = this.state.users.sort(compareNameAsc)
    this.setState({
      usersBackup: sorted
    })
  }

  sortNameDsc = () => {
    const sorted = this.state.users.sort(compareNameDsc)
    this.setState({
      usersBackup: sorted
    })
  }

  sortIdAsc = () => {
    const sorted = this.state.users.sort(compareIdAsc)
    this.setState({
      usersBackup: sorted
    })
  }

  sortIdDsc = () => {
    const sorted = this.state.users.sort(compareIdDsc)
    this.setState({
      usersBackup: sorted
    })
  }

  inputFilter = (e) => {
    if (e.target.value === ''){
      this.setState({
        usersBackup: this.state.users
      })
    } else {
      if(this.state.searchMode === 1) {
        this.filterID = Number(e.target.value)
        console.log(this.filterID)
        console.log(e.target.value)
        const sorted = this.state.users.filter(x => x.userId === this.filterID)
        this.setState({
          usersBackup: sorted
        })
      } else {
        this.filterID = e.target.value
        let patt = new RegExp(this.filterID, 'i')
        console.log(this.filterID)
        console.log(e.target.value)
        const sorted = this.state.users.filter(
          x => patt.test(x.name.first + ' ' + x.name.last)
        );
        this.setState({
          usersBackup: sorted
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

  render() {
    const displayUsers = this.state.usersBackup.map((x, i) => {
      return (
        <User user={x} key={i}/>
      )
    })

    return (
      <main>
        <h2>List of users</h2>
        <input id="inputTest" onChange={this.inputFilter} type="text" placeholder="ID" />
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
        <div>{displayUsers}</div>
      </main>
    );

  }
}