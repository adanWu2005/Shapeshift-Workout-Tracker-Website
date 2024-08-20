import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarHome.css';
import LogoIntro from '../../assets/LogoIntro.png'

const NavbarHome = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className='navbar'>
      <div className="welcome">
        <h2>Welcome <span className='usernameHeader'>{username}</span></h2>
      </div>
      <div className="exitContainer">
        <button className="logout" onClick={handleLogout}>
            Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarHome;

