import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./HeroBanner.css"

const HeroBanner = () => {

  const navigate = useNavigate();

  return (
    <>
      <main className="hero__mainSection">
        <div className="hero__text">
          <p>"Unlock your potential as a</p>
          <p> <span className="hero__highlitedText"> Mentor </span>and empower</p>
          <p>others to thrive"</p>
        </div>
        <div className="hero__buttons">
          <button className="hero__primaryBtn" onClick={() => {navigate("/form")}} >Get Started as a Mentor <img src="/hero__primaryBtnVector.svg" alt="" /></button>
          <button className="hero__secondaryBtn">Learn More <img src="/hero__secondaryBtnVector.svg" alt="" /></button>
        </div>
      </main>
      <div className="hero__styleBgParent">
        <img
          className="hero__styleBg"
          src="/Rectangle 1.svg"
          alt="Hero Background Style"
        />
        <img
          className="hero__stylePicture"
          src="/Rectangle 2.jpg"
          alt="Hero Banner Image"
        />
      </div>
    </>
  );
}

export default HeroBanner