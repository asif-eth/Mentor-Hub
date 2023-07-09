import React from 'react'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import "./Mentor.css"
import MentorData from "./MentorData.json"

const Mentor = () => {
  return (
    <>
      <div className="mentorPage__mainHeader">
        <Header />
      </div>

      <div className="mentorPageHead">
        <h2 className="mentorPage__header">Our Mentors</h2>
      </div>

      <div className="mentorContainer">
        {MentorData.map((mentors) => (
          <div className="mentor">
            <div className="mentorImg">
              <img src={mentors.img} alt={mentors.name} />
            </div>
            <div className="mentorName">{mentors.name}</div>
            <div className="mentorRole">{mentors.role}</div>
            <div className="mentorSocials">
              <img src="/faceBookLogo.svg" alt="FaceBook" />
              <img src="/twitterLogo.svg" alt="Twitter" />
              <img src="/linkedinLogo.svg" alt="LinkedIn" />
            </div>
          </div>
        ))}
      </div>

      <div className="mentorPage__footer">
        <Footer />
      </div>
    </>
  );
}

export default Mentor
