import React from 'react'

export default function FormChecklist(props) {
  const name = new RegExp(/\w/, 'i')
  const email = new RegExp(/.{1,}(@)\w{2,}\.\w{2,}/, 'i')
  const phone = new RegExp(/[(]\d{3}[)]\s\d{3}-\d+/, 'i')
  const date = new RegExp(/\d{4}(-)\d{2}(-)\d{2}/, 'i', 'g')

  return (
    <div className="add-user-signals">
      <div className="checklist-filler">
      </div>
      {/* First Name */}
      <div className="checklist-div">
        <i 
          style={{opacity: name.test(props.first) ? '1' : '0'}}
          className={`fas fa-check-circle ${name.test(props.first) ? 'animated-check' : null}`}></i>
      </div>
      {/* Last Name */}
      <div className="checklist-div">
        <i 
          style={{opacity: name.test(props.last) ? '1' : '0'}}
          className={`fas fa-check-circle ${name.test(props.last) ? 'animated-check' : null}`}></i>
      </div>
      {/* Email */}
      <div className="checklist-div">
        <i 
          style={{opacity: email.test(props.email) ? '1' : '0'}}
          className={`fas fa-check-circle ${email.test(props.email) ? 'animated-check' : null}`}></i>
      </div>
      {/* Phone */}
      <div className="checklist-div">
        <i 
          style={{opacity: phone.test(props.phone) ? '1' : '0'}}
          className={`fas fa-check-circle ${phone.test(props.phone) ? 'animated-check' : null}`}></i>
      </div>
      {/* Date */}
      <div className="checklist-div">
        <i 
          style={{opacity: date.test(props.date) ? '1' : '0'}}
          className={`fas fa-check-circle ${date.test(props.date) ? 'animated-check' : null}`}></i>
      </div>
      {/* City */}
      <div className="checklist-div">
        <i 
          style={{opacity: name.test(props.city) ? '1' : '0'}}
          className={`fas fa-check-circle ${name.test(props.city) ? 'animated-check' : null}`}></i>
      </div>
      {/* State */}
      <div className="checklist-div">
        <i 
          style={{opacity: name.test(props.state) ? '1' : '0'}}
          className={`fas fa-check-circle ${name.test(props.state) ? 'animated-check' : null}`}></i>
      </div>
      {/* Image */}
      <div className="checklist-div">
        <i 
          style={{opacity: props.imgUrlCorrect ? '1' : '0'}}
          className={`fas fa-check-circle ${props.imgUrlCorrect ? 'animated-check' : null}`}></i>
      </div>
      {/* Privacy */}
      <div className="checklist-div">
        <i 
          style={{opacity: props.agreePrivacy ? '1' : '0'}}
          className={`fas fa-check-circle ${props.agreePrivacy ? 'animated-check' : null}`}></i>
      </div>
    </div>
  )
}