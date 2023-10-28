import React, { useState } from 'react'
import '../css/header.css'
function Header() {

  const [theme, setTheme] = useState("light")
  const handletheme = () => {
    if (theme === 'dark')
      setTheme('light')
    else
      setTheme('dark')
    console.log(theme)
  }
  return (
    <div>
      <div className={`main ${'main-' + theme}`}>
        <div className='head-container' >
          <h1>web Title</h1>
        </div>
        <div className='li-container'>
          <ul>
            <li className={`${'li-' + theme}`}>Home</li>
            <li className={`${'li-' + theme}`}>About us</li>
            <li className={`${'li-' + theme}`}>Services</li>
            <li className={`${'li-' + theme}`}>Login</li>
          </ul>
        </div>
      </div>
      <div className='btn-container'>
      <button className={`button ${'button-'+theme}`} onClick={handletheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
      </div>
    </div>
  )
}

export default Header