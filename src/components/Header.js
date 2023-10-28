import React from 'react'
import '../css/header.css'
function Header() {
  return (
    <div className='main'>
        <div className='head-container' >
            <h1>web Title</h1>
        </div>
        <div className='li-container'>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}

export default Header