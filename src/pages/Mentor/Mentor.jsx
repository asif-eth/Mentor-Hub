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
        {MentorData.map((mentor) => (
          <div className="mentor">
            <div className="mentorImg">
              <img src={mentor.img} alt={mentor.name} />
            </div>
            <div className="mentorName">{mentor.name}</div>
            <div className="mentorRole">{mentor.role}</div>
            <div className="mentorSocials">
              <img src="/public/faceBookLogo.svg" alt="FaceBook" />
              <img src="/public/twitterLogo.svg" alt="Twitter" />
              <img src="/public/linkedinLogo.svg" alt="LinkedIn" />
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
