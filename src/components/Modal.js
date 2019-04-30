import React, { Component } from 'react'
import { capitalize } from '../utils/helpers'

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
    this.props.deleteUser(this.props.user.userId)
    this.props.closeModal()
    this.setState({
      editMode: false
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
    this.props.editUser(editedUser, this.props.user.userId)
    this.viewMode()
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

  render() {
    if (!this.props.displayModal) {
      return null
    }

    if (!this.state.editMode) {
      return (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-close" onClick={this.closeModal}>X</div><br />
            <img src={this.props.user.picture.large} alt="User" width="128"/><br />
            <button 
              style={{display: !this.props.isLoggedIn && "none"}}
              onClick={this.editMode}>
                Edit User
            </button>
            <div style={{display: this.props.isLoggedIn && "none", textAlign: "center"}}>To delete or edit users, log in</div><br/>
            <div style={{lineHeight: "25px"}}>
              Name: {capitalize(this.state.first)}<br />
              Surname: {capitalize(this.state.last)}<br />
              Born: {this.state.date.substring(0, 10)}<br />
              City: {capitalize(this.state.city)}<br />
              State: {capitalize(this.state.state)}<br />
              E-mail: {this.state.email}<br />
              Phone: {this.state.phone}<br />
            </div>
          </div>
          <div className="mask" onClick={this.closeModal}></div>
        </div>
      )
    }

    return (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-close" onClick={this.closeModal}>X</div><br />
          <img src={this.props.user.picture.large} alt="User" width="128"/><br />
          <button onClick={this.viewMode}>View Info</button><br />
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="first" value={this.state.first} onChange={this.handleChange} placeholder="Name" required/>
            <input type="text" name="last" value={this.state.last} onChange={this.handleChange} placeholder="Surname" required/>
            <input type="date" name="date" value={this.state.date.substring(0, 10)} onChange={this.handleChange} placeholder="Date of Birth" required/>
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} placeholder="City" required/>
            <input type="text" name="state" value={this.state.state} onChange={this.handleChange} placeholder="State" required/>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required/>
            <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Phone" required/><br /><br />
            <button>Submit</button>
            <button 
              onClick={(e) => this.deleteConfirm(e)}>
                Delete user
            </button>
          </form>
        </div>
        <div className="mask" onClick={this.closeModal}></div>
      </div>
    )
  }
}