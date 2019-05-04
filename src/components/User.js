import React, { Component } from 'react'
import { capitalize } from '../utils/helpers'

export default class User extends Component {

  render() {
    return (
      <div className="user-info">
        <div onClick={() => this.props.getModalId(this.props.user.userId)}>
          <div className="info-img-container" >
            <div className="info-container">
              <i className="fas fa-info-circle user-info-button"></i>
              <h4>
                {capitalize(this.props.user.name.first + " " + this.props.user.name.last)}
              </h4>
              <p className="user-from">
                From: {capitalize(this.props.user.location.city)}, {capitalize(this.props.user.location.state)}
              </p>
            </div>
            <div className="img-container">
              <img src={this.props.user.picture.large} alt="User" width="128" height="128"/>
            </div>
          </div>
          <div className="user-info-add">
            <div>
              <p className="user-dob">
                <i 
                  className="fas fa-birthday-cake" 
                  title={this.props.user.dob.date !== undefined ? `Birthday: ${this.props.user.dob.date.substring(0, 10)}` : null}>
                </i><br /><br />
                User Id: {this.props.user.userId}
              </p>
              <p className="user-location">
                Location:<br /> {capitalize(this.props.user.location.city)},<br /> {capitalize(this.props.user.location.state)}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}