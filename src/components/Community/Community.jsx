import React from 'react'
import "./Community.css"

const Community = () => {
  return (
    <>
      <div className="body">
        <div className="communityBody">
          <div className="communityBody__imgArea">
            <img src="/communityAreaImg.jpeg" alt="Community Image" />
          </div>
          <div className="communityBody__textArea">
            <div className="communityBody__textArea-header">
              <h3>Join Our Community of Mentors</h3>
            </div>
            <div className="communityBody__textArea-body">
              <p>Becoming a mentor on Mentor Hub is quick</p>
              <p>and easy. Follow these simple steps to get</p>
              <p>started.</p>
            </div>
            <button className="communityBody__textArea-button">
              Learn More
              <img
                className="communityBody__textArea-button__Vector"
                src="/communityBtnVector.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community