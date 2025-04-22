import React from 'react';
import './css/Login.css';
import logo from '../../img/code_builders_logo.png';

const Login = ({ setIsAuthenticated }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Check credentials
    if (username === "shiyam" && password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
  return (
    <div className="login-container">
      <img src={logo} alt="VPS Code Builders Logo" className="logo" />
      <h1 className='loginpageheading'>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input className='logininputfield' type="text" id="username" name="username" placeholder="Username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input  className='logininputfield' type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
