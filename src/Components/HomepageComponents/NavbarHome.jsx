import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarHome.css';

const NavbarHome = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
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

