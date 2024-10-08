import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../../assets/loginValidation';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    
    const hasErrors = Object.values(validationErrors).some(value => value !== '');
    
    if (!hasErrors) {
      try {
        const res = await axios.post('https://shapeshift-backend-2dhd.onrender.com/login', values); 

        console.log('Response data:', res.data.token);
        if (res.data.token) {
          localStorage.setItem('authToken', res.data.token); 
          localStorage.setItem('username', values.username);
          console.log('Login successful, navigating to home');
          navigate('/home');
        } else {
          console.log('Login failed:', res.data.message);
          alert("Username or password is incorrect");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Failed to log in. Please try again later.");
      }
    } 
  };
  
  return (
    <div className='login'>
      <div className="loginBox">
        <h1>Welcome Back!</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="loginUsername">
            <input type="text" placeholder='Username'
              onChange={handleInput} name='username' />
            {errors.username && <span className="textDanger">{errors.username}</span>}
          </div>
          <div className="loginPassword">
            <input type="password" placeholder='Password'
              onChange={handleInput} name='password' />
            {errors.password && <span className="textDanger">{errors.password}</span>}
          </div>
          <div>
            <button type='submit' className='loginBtn'>Login</button>
          </div>
          <p className='loginException'>
            <Link to="/signup" className='linkException'>
              Don't have an account? Sign up
            </Link>
          </p>
          <p className='backToHome'>
            <Link to="/" className='backToHomeLink'>
              Back to home
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
