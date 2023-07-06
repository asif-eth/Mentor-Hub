import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
      <header className="header">
        <img src="/Rectangle 3.jpg" alt="Mentor Hub Logo" />
        <nav className="header__menu">
          <div className="header__menu-items">
            <ul className="header__menu-item">
              <li>Home</li>
              <li>About Us</li>
              <li>Mentors</li>
              <li>Sessions</li>
            </ul>
          </div>
        </nav>
        <button className="header__signup-button">
          <img className="button__icon" src="/iconamoon_profile.svg"></img>
          <span className="button__text">Sign Up</span>
        </button>
      </header>
    </>
  );
}

export default Header
