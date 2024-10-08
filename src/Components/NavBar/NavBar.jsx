import React, { useRef } from 'react';
import './NavBar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const NavBar = () => {

    const menuRef = useRef();

    const openMenu = () =>{
      menuRef.current.style.right="0";
    }
    const closeMenu = () => {
      menuRef.current.style.right="-350px";
    }

  return (
    <div className = "navBar">
        <div className="name-print">
            <h2>ADAN WU</h2>
        </div>
      <div className="navMobOpen" onClick={openMenu}>
        <span class="material-symbols-outlined">
        menu_open
        </span>
      </div>
        <ul ref = {menuRef} className="nav-menu">
          <div className="navMobClose" onClick={closeMenu}>
            <span class="material-symbols-outlined">
            close
            </span>
          </div>
            <li><AnchorLink className = 'anchorLink' href='#home'><p>Home</p></AnchorLink></li>
            <li><AnchorLink className = 'anchorLink' offset={50} href='#about'><p>About</p></AnchorLink></li>
            <li><AnchorLink className = 'anchorLink' offset={50} href='#services'><p>Services</p></AnchorLink></li>
            <li><AnchorLink className = 'anchorLink' offset={50} href='#portfolio'><p>Portfolio</p></AnchorLink></li>
            <li><AnchorLink className = 'anchorLink' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
        </ul>
        <div className="nav-connect"><AnchorLink className = 'anchorLink' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default NavBar