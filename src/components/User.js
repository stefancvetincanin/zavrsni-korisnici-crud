import React, { Component } from 'react'
import { capitalize } from '../utils/helpers'

export default class User extends Component {
  state = {
    display: true
  }

  getModalId = () => {
    // alert('radi' + this.props.user.userId)
    this.props.getModalId(this.props.user.userId)
  }

  render() {
    return (
      <div onClick={this.getModalId} className="user-info">
        <div>
          <h3>
          {capitalize(this.props.user.name.first + " " + this.props.user.name.last)}
          </h3>
          <p>From: {capitalize(this.props.user.location.city)}, <br />{capitalize(this.props.user.location.state)}</p>
          <p>User Id: {this.props.user.userId}</p>
          <img src={this.props.user.picture.large} alt="User" width="128"/>
        </div>
      </div>
    )
  }
}