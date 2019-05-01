import React from 'react'
import Loader from '../images/loader.gif'

export default function SendingData() {
  return (
    <div>
      <div className="sending-loader">
        <img 
          style={{position: 'relative', top: '2px'}}
          src={Loader} 
          alt="" 
          width="100"
        />
      </div>
      <div className="mask app-mask"></div>
    </div>
  )
}