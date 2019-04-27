import React, { Component } from 'react'
import { capitalize } from '../utils/helpers'

export default class Modal extends Component {
  state = {
    editMode: false
  }

  deleteById = () => {
    this.props.onClickDelete(this.props.user.userId)
    this.props.onClickClose()
  }

  editMode = () => {
    this.setState({
      editMode: true
    })
  }

  viewMode = () => {
    alert("radi view mode")
    this.setState({
      editMode: false
    })
  }

  editUser = () => {
    alert('user edited!')
  }

  render() {
    if(!this.props.displayState) {
      return null
    }

    if(!this.state.editMode) {
      return (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-close" onClick={this.props.onClickClose}>X</div><br />
            <img src={this.props.user.picture.large} alt="User"/><br />
            <button onClick={this.editMode}>Edit User</button><br />
            <p>
              Name: {capitalize(this.props.user.name.first + " " + this.props.user.name.last)}<br />
              Date of birth: {this.props.user.dob.date.substring(0, 10)}<br />
              From: {capitalize(this.props.user.location.city)}, {capitalize(this.props.user.location.state)}
            </p>
            <p>
              E-mail: {this.props.user.email}<br />
              Phone: {this.props.user.phone}<br />
              User Id: {this.props.user.userId}
            </p>
          </div>
          <div className="mask"></div>
        </div>
      )
    }
    
    return (
      <div className="modal-container">
        <div className="modal">
          <div className="modal-close" onClick={this.props.onClickClose}>X</div><br />
          <img src={this.props.user.picture.large} alt="User"/><br />
          <button onClick={this.viewMode}>View Info</button><br />
          <p>
            Name: {capitalize(this.props.user.name.first + " " + this.props.user.name.last)}<br />
            Date of birth: {this.props.user.dob.date.substring(10)}<br />
            From: {capitalize(this.props.user.location.city)}, {capitalize(this.props.user.location.state)}
          </p>
          <p>
            E-mail: {this.props.user.email}<br />
            Phone: {this.props.user.phone}<br />
            User Id: {this.props.user.userId}
          </p>
          <button onClick={this.editUser}>Submit</button>
          <button onClick={this.deleteById}>Delete user</button>
        </div>
        <div className="mask"></div>
      </div>
    )
  
  }
}