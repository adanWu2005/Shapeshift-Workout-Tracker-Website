import React, { useState, useEffect } from 'react'
import './IntroPage.css'
import './IntroLoader.css'
import LogoIntro from '../../assets/LogoIntro.png'
import { Link } from 'react-router-dom'
import workoutMan from '../../assets/workoutMan.png'

const IntroPage = () => {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    loading ? 
  <div className="center-container">
    <div className="terminal-loader">
      <div className="terminal-header">
        <div className="terminal-title">Status</div>
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
      </div>
      <div className="text">Loading...</div>
    </div>     
  </div>

  :
  
    <div className='intro'>
        <div className='introHeader'>
          <p className='headerQuote'>"The body acheives what the mind believes"</p>
          <img src={LogoIntro} alt="" />
          <div className="rightHeaderContainer">
            <span class="material-symbols-outlined">
              call
            </span>
            <p className='phoneNum'>647-537-3205</p>    
            <button className="introJoinBtn"><Link to="/signup" className='linkJoin'><p>Join</p></Link></button>        
          </div>
        </div>
        <div className="introContent">
          <div className="loginScreen"> 
            <div className="workoutManImg">
              <img src={workoutMan} alt="" />
              <div className="tooltip">Get fit with ShapeShift! Create your account right now!</div>
            </div>
            <div className="introDescContainer">
              <p>Welcome to ShapeShift!</p>
              <h1>Get started on your fitness journey today!</h1>
              <h3>Create your free ShapeShift <br />account today!</h3>              
            </div>
            <div className="introLogin">
              <button className="introLoginBtn"><Link to="/login" className='linkLogin'>Login</Link></button>
              <button className="introSignupBtn"><Link to="/signup" className='linkSignin'>Sign Up</Link></button>
            </div>
          </div>        
        </div>
    </div>
  )
}

export default IntroPage
