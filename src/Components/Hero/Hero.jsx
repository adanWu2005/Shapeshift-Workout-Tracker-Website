import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile from'../../assets/profile.jpeg'
import resume from '../../../public/Adan Wu - Resume (2).pdf'

const Hero = () => {
  return (
    <div id='home' className = 'mainPage'>
      <img src={profile} alt="" />
      <h1>I'm <span>Adan Wu</span>, Student at Queens University</h1>
      <p>I am currently in second year 
        enrolling in Bachelors of
         Computing(Honors) at Queens University</p>
      <div className="action">
        <div className="connect"><AnchorLink className = 'anchorLink' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="resume">
          <a href={resume} download={resume}>My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero