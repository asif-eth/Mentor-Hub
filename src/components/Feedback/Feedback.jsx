import React from 'react'
import "./Feedback.css"

const Feedback = () => {
  return (
    <>
      <div className="body">
        <div className="feedBackSection">
          <div className="feedBackSection__header">
            <h3>Hear from Our Mentors</h3>
          </div>
          <div className="feedBackSection__feedbacks">
            
            <div className="feedbackSection__feedback">
              <div className="singleFeedback">
                <div className="feedBack__img">
                  <img src="/feedBackMaliniImage.jpeg" alt="Malini Sindhu" />
                </div>
                <div className="feedBack__header">Malini Sindhu <p>Chennai, INDIA</p> </div>
              </div>
              <div className="feedBack__body">
                <p>"Being a mentor on Mentor Hub has</p>
                <p>been an incredibly rewarding</p>
                <p>experience. I've had the opportunity to</p>
                <p>share my knowledge and guide</p>
                <p>aspiring professionals in their career</p>
                <p>journeys.”</p>
              </div>
            </div>

            <div className="feedbackSection__feedback">
              <div className="singleFeedback">
                <div className="feedBack__img">
                  <img src="/feedbackArchanaImage.jpeg" alt="Archana Nair" />
                </div>
                <div className="feedBack__header">Archana Nair <p>Kerela, INDIA</p> </div>
              </div>
              <div className="feedBack__body">
                <p>"Mentor Hub has exceeded my</p>
                <p>expectations. The platform's user-</p>
                <p>friendly design and comprehensive</p>
                <p>profile customization options have</p>
                <p>allowed me to showcase my expertise and</p>
                <p>build credibility with mentees.”</p>
              </div>
            </div>

            <div className="feedbackSection__feedback">
              <div className="singleFeedback">
                <div className="feedBack__img">
                  <img src="/feedbackDeepakImage.jpeg" alt="Deepak Dinesh" />
                </div>
                <div className="feedBack__header">Deepak Dinesh <p>Chennai, INDIA</p> </div>
              </div>
              <div className="feedBack__body">
                <p>"As a mentor on Mentor Hub, I've been</p>
                <p>able to connect with mentees from around</p>
                <p>the world, bridging geographical</p>
                <p>boundaries. The platform's robust search</p>
                <p>made it easy for mentees to find me</p>
                <p>based on their specific needs.”</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback
