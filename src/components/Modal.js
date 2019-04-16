import React, { Component } from 'react'
import { capitalize } from '../utils/helpers'

export default class Modal extends Component {

  deleteById = () => {
    this.props.onClickDelete(this.props.user.userId)
    this.props.onClickClose()
  }

  render() {
    if(!this.props.displayState) {
      return null
    }
    return (
      <div className="modal-container">
        <div className="modal">
          <button onClick={this.props.onClickClose}>Hide modal</button>
          <button onClick={this.deleteById}>Delete user</button><br />
          <img src={this.props.user.picture.large} alt="User"/>
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
        </div>
        <div className="mask"></div>
      </div>
    )
  }
}