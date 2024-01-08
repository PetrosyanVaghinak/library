import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
      <form className='login-from'>
        <h2>Login</h2>
        <label for ="email">Email address</label>
        <input type="Email" placeholder=' Email' id='email' />
        <label for ="password">Password</label>
        <input type="password" placeholder=' ********' id='password' />
        <button>Login</button>
        <a href="">Forgot Password</a>
        <a href="/registers">Switch to Registration</a>
      </form>
    </div>
  )
}
