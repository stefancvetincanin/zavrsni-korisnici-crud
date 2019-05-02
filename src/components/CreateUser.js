import React from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom' //eslint-disable-line
import MaskedInput from 'react-text-mask'

export default class CreateUser extends React.Component {
  state = {
    first: '',
    last: '',
    email: '',
    phone: '',
    date: '',
    city: '',
    state: '',
    agreePrivacy: false,
    imgUrl: '',
    imgUrlCorrect: false
  }

  componentDidMount() {
    this.props.changeLinkActive(3)
  }

  handleChange = (e) => {
    const { name, type, value, checked } = e.target
    type === 'checkbox' ? 
    this.setState({[name]: checked}) :
    this.setState({[name]: value})
  }

  handleForm = (e) => {
    e.preventDefault()
    const newUser = {
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
      userId: this.props.usersLength,
      picture: {
        large: this.state.imgUrl
      }
    }

    if(this.state.imgUrlCorrect) {
      this.props.isSendingData(true)
      fetch('https://reqres.in/api/users', {
        method: "POST",
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          'Auth-Token': this.props.authToken
        },
        body: JSON.stringify(newUser)
      })
        .then(response => response.json())
        .then(() => {
          this.props.isSendingData(false)
          this.props.createUser(newUser)
          this.handleReset()
        })
        .catch(error => {
          this.props.isSendingData(false)
          this.props.showServerError()
          console.error("CUSTOM ERROR: " + error)
        })
    } else
      alert("The image url you entered failed to load. Please check your link and try again.")
  }

  handleReset = () => {
    this.setState({
      first: '',
      last: '',
      email: '',
      phone: '',
      date: '',
      city: '',
      state: '',
      agreePrivacy: false,
      imgUrl: ''
    })
  }

  imageLoaded = () => {
    this.setState({
      imgUrlCorrect: true
    })
  }

  imageError = () => {
    this.setState({
      imgUrlCorrect: false
    })
  }

  render() {
    return (
      <main className="container">
        <h2>Create User</h2>
        <form 
          style={{display: !this.props.isLoggedIn && 'none'}}
          onSubmit={this.handleForm}>
          <input type="text" placeholder="First Name" name="first" value={this.state.first} onChange={this.handleChange} required/><br />
          <input type="text" placeholder="Last Name" name="last" value={this.state.last} onChange={this.handleChange} required/><br />
          <input type="email" placeholder="E-mail" name="email" value={this.state.email} onChange={this.handleChange} required 
          pattern=".{1,}(@)\w{2,}\.\w{2,}"/><br />
          {/* <input type="tel" placeholder="Phone number" name="phone" value={this.state.phone} onChange={this.handleChange} required/><br /> */}
          <MaskedInput
            mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholder="Enter a phone number"
            value={this.state.phone}
            guide={false}
            onChange={this.handleChange}
            name="phone"
            pattern="[(]\d{3}[)]\s\d{3}-\d+"
            required
          /><br />
          <input type="date" placeholder="Date of Birth" name="date" onChange={this.handleChange} value={this.state.date} required/><br />
          <input type="text" placeholder="City" name="city" value={this.state.city} onChange={this.handleChange} required/><br />
          <input type="text" placeholder="Country" name="state" value={this.state.state} onChange={this.handleChange} required/><br />
          <input type="url" placeholder="Link your picture" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} required/><br />
          <label>
            <input type="checkbox" name="agreePrivacy" checked={this.state.agreePrivacy} onChange={this.handleChange} required/>
            Do you agree to our privacy policy?
          </label><br />
          <button>Submit user</button>
          <input type="reset" onClick={this.handleReset}/>
          <hr />
          <small>
            <p>First name: {this.state.first}</p>
            <p>Last name: {this.state.last}</p>
            <p>Email: {this.state.email}</p>
            <p>Phone: {this.state.phone}</p>
            <p>Date: {this.state.date}</p>
            <p>City: {this.state.city}</p>
            <p>Country: {this.state.state}</p>
            <p>Agreement to privacy policy: {this.state.agreePrivacy ? "agreed" : "not agreed"}</p>
          </small>
          <p style={{display: this.state.imgUrlCorrect ? "none" : null}}>
            Here should be a picture preview; if you cannot see it, that means the URL you entered is invalid
          </p>
          <img 
            src={this.state.imgUrl} 
            alt="" 
            onLoad={this.imageLoaded} 
            onError={this.imageError}
          />
        </form>
        <p style={{display: this.props.isLoggedIn && 'none'}}>
          {/* You cannot register new users until you log in. */}
          You cannot register new users until you&nbsp;
          <Link 
            to="login" 
            onClick={() => {this.props.changeLinkActive(2)}}>
              log in
          </Link>
        </p>
      </main>
    )
  }
}