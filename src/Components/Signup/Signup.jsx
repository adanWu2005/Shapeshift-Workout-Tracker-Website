import React, { useEffect, useState } from 'react';
import './Signup.css';
import './SignupLoader.css';
import { Link, useNavigate } from 'react-router-dom';
import validation2 from '../../assets/signupValidation';
import axios from 'axios';

const Signup = () => {
  const [values2, setValues2] = useState({
    username: '',
    password: '',
    confirmpassword: ''
  });
  const [errors2, setErrors2] = useState({});

  const navigate = useNavigate();
  const handleInput2 = (e) => {
    setValues2(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const validationErrors = validation2(values2);
    setErrors2(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log('Sending data:', { username: values2.username, password: values2.password });
        const res = await axios.post('http://localhost:3000/signup', {
          username: values2.username,
          password: values2.password
        });
        if (res.data) {
          navigate('/login');
        }
      } catch (err) {
        console.error('Error during submission:', err);
      }
    }
  };


  return (

    <div className='signup'>
      <div className="signupBox">
        <h1>Welcome to ShapeShift!</h1>
        <form action="" onSubmit={handleSubmit2}>
          <div className="signupUsername">
            <input type="text" placeholder='Username'
              name='username' onChange={handleInput2} />
            {errors2.username && <span className="textDanger">{errors2.username}</span>}
          </div>
          <div className="signupPassword">
            <input type="password" placeholder='Password'
              name='password' onChange={handleInput2} />
            {errors2.password && <span className="textDanger">{errors2.password}</span>}
          </div>
          <div className="signupConfirmPassword">
            <input type="password" placeholder='Confirm password'
              name='confirmpassword' onChange={handleInput2} />
            {errors2.confirmpassword && <span className="textDanger">{errors2.confirmpassword}</span>}
          </div>
          <div>
            <button type='submit' className='signupBtn'>Sign Up</button>
          </div>
          <p className='signupException'>
            <Link to="/login" className='linkException2'>
              Already have an account? Login
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

export default Signup;
