import React from 'react'

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
    imgUrl: ''
  }

  handleChange = (e) => {
    const { name, type, value, checked } = e.target
    type === 'checkbox' ? 
    this.setState({[name]: checked}) :
    this.setState({[name]: value})
  }

  handleForm = (e) => {
    e.preventDefault()
    alert("submitted")
    const newUser = {
      name: {
        first: this.state.first.toLowerCase(),
        last: this.state.last.toLowerCase()
      },
      email: this.state.email.toLowerCase(),
      phone: this.state.phone,
      dob: {
        date: this.state.date
      },
      location: {
        city: this.state.city.toLowerCase(),
        state: this.state.state.toLowerCase()
      },
      userId: this.props.usersLength + 1,
      picture: {
        large: this.state.imgUrl
      }
    }
    console.log(newUser)
    this.props.createUser(newUser)
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

  render() {
    return (
      <main className="container">
        <h2>Create User</h2>
        <form onSubmit={this.handleForm}>
          <input type="text" placeholder="First Name" name="first" value={this.state.first} onChange={this.handleChange} required/><br />
          <input type="text" placeholder="Last Name" name="last" value={this.state.last} onChange={this.handleChange} required/><br />
          <input type="email" placeholder="E-mail" name="email" value={this.state.email} onChange={this.handleChange} required/><br />
          <input type="tel" placeholder="Phone number" name="phone" value={this.state.phone} onChange={this.handleChange} required/><br />
          <input type="date" placeholder="Date of Birth" name="date" onChange={this.handleChange} value={this.state.date} required/><br />
          <input type="text" placeholder="City" name="city" value={this.state.city} onChange={this.handleChange} required/><br />
          <input type="text" placeholder="State" name="state" value={this.state.state} onChange={this.handleChange} required/><br />
          <input type="url" placeholder="Link your picture" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange} required/><br />
          <label>
            <input type="checkbox" name="agreePrivacy" checked={this.state.agreePrivacy} onChange={this.handleChange} required/>
            Do you agree to our privacy policy?
          </label><br />
          <h1>Submit crashes app</h1>
          <button>Submit user</button>
          <input type="reset" onClick={this.handleReset}/>
        </form>
        <p>First: {this.state.first}</p>
        <p>Last: {this.state.last}</p>
        <p>email: {this.state.email}</p>
        <p>phone: {this.state.phone}</p>
        <p>date: {this.state.date}</p>
        <p>city: {this.state.city}</p>
        <p>state: {this.state.state}</p>
        <p>Agree to privacy policy: {this.state.agreePrivacy ? "agreed" : "not agreed"}</p>
        <img src={this.state.imgUrl}/>
      </main>
    )
  }
}