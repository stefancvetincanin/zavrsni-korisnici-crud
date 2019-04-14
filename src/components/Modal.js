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
          <button onClick={this.deleteById}>Delete user</button>
          <h3>Korisnik</h3>
          <p>
            {capitalize(this.props.user.name.first + " " + this.props.user.name.last)}
          </p>
          <p>User Id: {this.props.user.userId}</p>
          <p>From: {capitalize(this.props.user.location.city)}, {capitalize(this.props.user.location.state)}</p>
          <img src={this.props.user.picture.large} alt="User"/>
        </div>
        <div className="mask"></div>
      </div>
    )
  }
}