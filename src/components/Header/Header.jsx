import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Header.css"

const Header = () => {

  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <img className="header__logo" onClick={()=>navigate("/")} src="/Rectangle 3.jpg" alt="Mentor Hub Logo" />
        <nav className="header__menu">
          <div className="header__menu-items">
            <ul className="header__menu-item">
              <li onClick={()=>navigate("/")}>
                Home
              </li>
              <li>About Us</li>
              <li onClick={()=>navigate("/mentor")}>
                Mentors
              </li>
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
