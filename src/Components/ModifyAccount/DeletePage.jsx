import React from 'react'
import { useNavigate } from 'react-router-dom'
import './DeletePage.css'


const DeletePage = () => {

  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/home'); 
  };

  const handleCancel = () => {
    navigate(-1); 
  };
  return (
      <div className="delete-page">
        <div className="delete-box">
          <h1>Are you sure you want to delete your account?</h1>
          <p>This action cannot be undone.</p>
          <div className="delete-buttons">
            <button onClick={handleConfirm} className="confirm-delete">
              Yes, Delete My Account
            </button>
            <button onClick={handleCancel} className="cancel-delete">
              Cancel
            </button>
          </div>
        </div>

      </div>      
  )
}

export default DeletePage