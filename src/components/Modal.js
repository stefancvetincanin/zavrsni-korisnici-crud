import React, { Component } from 'react'
import { capitalize } from '../utils/helpers'

export default class Modal extends Component {
  render() {
    return (
      <div className="modal-container">
        <div className="modal">
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