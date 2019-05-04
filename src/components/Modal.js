import React, { Component } from 'react'
import { capitalize } from '../utils/helpers'
import ModalLabels from './ModalLabels'

export default class Modal extends Component {
  state = {
    editMode: false,
    first: '',
    last: '',
    date: '',
    state: '',
    city: '',
    phone: '',
    email: ''
  }

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      this.setState({
        first: this.props.user.name.first,
        last: this.props.user.name.last,
        date: this.props.user.dob.date,
        city: this.props.user.location.city,
        state: this.props.user.location.state,
        phone: this.props.user.phone,
        email: this.props.user.email
      })
    }
  }

  // Delete functionality
  deleteConfirm = (e) => {
    if(window.confirm("Are you sure you want to delete this user?"))
      this.deleteById(e)
    else
      e.preventDefault()
  }

  deleteById = (e) => {
    e.preventDefault()
    this.props.isSendingData(true)
    fetch(`https://reqres.in/api/users/2`, {
        method: 'DELETE',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Auth-Token': this.props.authToken
        }
      })
        .then(response => response)
        .then(() => {
          this.props.deleteUser(this.props.user.userId)
          this.props.closeModal()
          this.setState({
            editMode: false
          })
          this.props.isSendingData(false)
        })
        .catch(error => {
          this.props.isSendingData(false)
          this.props.showServerError()
          console.error("CUSTOM ERROR: " + error)
        })
  }

  // Submit functionality
  handleSubmit = e => {
    e.preventDefault()
    const editedUser = {
      name: {
        first: this.state.first.toLowerCase(),
        last: this.state.last.toLowerCase()
      },
      email: this.state.email,
      phone: this.state.phone,
      dob: {
        date: this.state.date
      },
      location: {
        city: this.state.city.toLowerCase(),
        state: this.state.state.toLowerCase()
      },
      userId: this.props.user.userId,
      picture: {
        large: this.props.user.picture.large
      }
    }
    this.props.isSendingData(true)
    fetch('https://reqres.in/api/users/2', {
        method: 'PUT',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Auth-Token': this.props.authToken
        },
        body: JSON.stringify(editedUser)
      })
        .then(response => response.json())
        .then(() => {
          this.props.editUser(editedUser, this.props.user.userId)
          this.viewMode()
          this.props.isSendingData(false)
        })
        .catch(error => {
          this.props.isSendingData(false)
          this.props.showServerError()
          console.error("CUSTOM ERROR: " + error)
        })
  }

  // Changing the display mode
  editMode = () => {
    this.setState({
      editMode: true
    })
  }

  viewMode = () => {
    this.setState({
      editMode: false
    })
  }

  closeModal = () => {
    this.props.closeModal()
    this.setState({
      editMode: false
    })
  }

  // Event handler for form inputs
  handleChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  // Display
  render() {
    if (!this.props.displayModal) {
      return null
    }

    if (!this.state.editMode) {
      return (
        <div className="modal-container">
          <div className="modal">
            <div 
              className="modal-close" 
              onClick={this.closeModal}
            >
              X
            </div>

            <div className="modal-form-container">
              <img src={this.props.user.picture.large} alt="User" width="128" height="128"/>
              <button
                style={{display: !this.props.isLoggedIn && "none"}}
                onClick={this.editMode}
              >
                Edit User
              </button>
              <div
                style={{display: this.props.isLoggedIn && "none", textAlign: "center"}}
              >
                <p>You must log in before you can edit users</p>
              </div>
              <div className="modal-form-columns">
                <ModalLabels />
                <div>
                  <span>{capitalize(this.state.first)}</span>
                  <span>{capitalize(this.state.last)}</span>
                  <span>{this.state.date.substring(0, 10)}</span>
                  <span>{capitalize(this.state.city)}</span>
                  <span>{capitalize(this.state.state)}</span>
                  <span>{this.state.email}</span>
                  <span>{this.state.phone}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mask" onClick={this.closeModal}></div>
        </div>
      )
    }

    return (
      <div className="modal-container">
        <div className="modal">
          <div 
            className="modal-close" 
            onClick={this.closeModal}
          >
            X
          </div>
          <div className="modal-form-container">
            <img src={this.props.user.picture.large} alt="User" width="128" height="128"/>
            <button onClick={this.viewMode}>
              View Info
            </button>
            <div className="modal-form-columns">
              <ModalLabels />
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="first" value={this.state.first} onChange={this.handleChange} placeholder="Name" required/>
                <input type="text" name="last" value={this.state.last} onChange={this.handleChange} placeholder="Surname" required/>
                <input type="date" name="date" value={this.state.date.substring(0, 10)} onChange={this.handleChange} placeholder="Date of Birth" required/>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="City" required/>
                <input type="text" name="state" value={this.state.state} onChange={this.handleChange} placeholder="State" required/>
                <input type="text" className ="modal-email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" 
                  pattern=".{1,}(@)\w{2,}\.\w{2,}" required/>
                <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Phone" required/><br />
                <button>
                  Submit
                </button>
                <button 
                  onClick={(e) => this.deleteConfirm(e)}>
                    Delete user
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mask" onClick={this.closeModal}></div>
      </div>
    )
  }
}