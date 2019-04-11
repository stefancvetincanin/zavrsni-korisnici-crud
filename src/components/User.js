import React, { Component } from 'react'

export default class User extends Component {
  state = {
    display: true
  }

  capitalize(ulaz) {
    return ulaz.split(' ').map(ulaz => ulaz.charAt(0).toUpperCase() + ulaz.substring(1)).join(' ')
  }

  render() {
    return (
      <div>
        <p>
          {this.capitalize(this.props.user.name.first + " " + this.props.user.name.last)}
        </p>
        <p>User Id: {this.props.user.userId}</p>
        <p>From: {this.capitalize(this.props.user.location.city)}, {this.capitalize(this.props.user.location.state)}</p>
        <img src={this.props.user.picture.large} />
      </div>
    )
  }
}