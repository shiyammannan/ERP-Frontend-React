import React from 'react'

function login() {
  return (
    <div className="login-container">
      <img src={logo} alt="VPS Code Builders Logo" className="logo" />
      <h1>Login</h1>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn">Login</button>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </form>
    </div>
  )
}

export default login