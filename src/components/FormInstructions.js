import React from 'react'

export default function FormInstructions(props) {
  return (
    <div
      style={{display: props.showInstructions ? 'block' : 'none'}}
    >
      <div className="server-error-notification">
        <p>E-mail format:<br />#@##.##</p>
        <p>Phone format:<br />(123) 456-789</p>
        <p>Picture format:<br />http://###.###/###</p>
        <br />
        <button 
          onClick={() => props.hideInstructions(false)}>
            Close notification
        </button>
      </div>
      <div className="mask app-mask"></div>
    </div>
  )
}