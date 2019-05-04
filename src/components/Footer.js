import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-container">
      <a 
        href="https://www.github.com/stefancvetincanin" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <small>&copy; by Stefan Cvetinčanin</small>
      <a 
        href="http://www.linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </footer>
  )
}