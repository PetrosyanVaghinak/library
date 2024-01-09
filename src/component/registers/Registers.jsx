import React from 'react'
import "./registers.css"
export default function Registers() {
  return (
    <div className='container-registers'>
        <div className="header">
            <div className="text">Sign Up</div>

        </div>
        <div className="inputs">
            <div className="input">
              <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
              <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
              <input type="password" placeholder='password' />
            </div>
        </div>
        <div className="submit-container">
          <a className="submit" href='/login'>Sign Up</a>
          <a className="submit">Login</a>
        </div>
    </div>
  )
}
