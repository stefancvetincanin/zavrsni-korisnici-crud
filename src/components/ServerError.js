import React from 'react'

export default function ServerError(props) {
  return (
    <div>
      <div className="server-error-notification">
        <p>We're sorry but there seems to be a problem with the API server. Please try again later.</p>
        <br />
        <button 
          onClick={() => props.hideServerError()}>
            Close notification
        </button>
      </div>
      <div className="mask app-mask-pointer" onClick={() => props.hideServerError()}></div>
    </div>
  )
}