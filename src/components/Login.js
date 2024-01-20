import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('invalid credential');
        }
      })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        window.location.href = '/Profile';
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className='form'>
      <p className='welcome-back'>Welcome back! 👋</p>
      <h3 className='sign-in'>Sign in to your account</h3>
      <label id="username">Your email</label>
      <br></br>
      <input
      className='userinput'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <label id="password">Password</label>
      <br></br>
      <input
      className='passinput'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <button className='button' onClick={handleLogin}>Continue</button>
      {error && <p>{error}</p>}
      <br></br>

    </div>
  );
};



export default Login;