import React from 'react'

export default function LoginInstructions(props) {
  return (
    <div
      style={{display: props.showInstructions ? 'block' : 'none'}}
    >
      <div className="server-error-notification">
        <p>Username:<br />'admin'</p>
        <p>Password:<br />'password'</p>
        <button 
          onClick={() => props.hideInstructions(false)}>
            Close notification
        </button>
      </div>
      <div className="mask app-mask-pointer" onClick={() => props.hideInstructions(false)}></div>
    </div>
  )
}