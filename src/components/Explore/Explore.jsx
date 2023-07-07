import React from 'react'
import "./Explore.css"

const Explore = () => {
  return (
    <>
      <div className="explore__body">
        <div className="explore__bodyContents">
          <div className="explore__bodyContents-header">
            Explore Diverse Mentorship Areas
          </div>

          <div className="explore__containers">
            <div className="explore__subContainer">
              <h3>Business and Entrepreneurship</h3>
              <p>Dive into the world of business and</p>
              <p>entrepreneurship. Our mentors in this area</p>
              <p>can provide valuable insights on topics like</p>
              <p>business strategy, marketing, finance,</p>
              <p> startups, leadership, and innovation.</p>
              <button className="explore__subContainer-Btn">
                Read More
                <img
                  className="explore__subContainer-Btn__Vector"
                  src="/exploreContainerVector.svg"
                  alt=""
                />
              </button>
            </div>

            <div className="explore__subContainer">
              <h3>Arts and Creativity</h3>
              <p>Unleash your creative potential with our</p>
              <p>mentors in the arts and creativity. Whether</p>
              <p>you're passionate about visual arts, writing,</p>
              <p>mentors can provide you with the necessary</p>
              <p>guidance and inspiration.</p>
              <button className="explore__subContainer-Btn">
                Read More
                <img
                  className="explore__subContainer-Btn__Vector"
                  src="/exploreContainerVector.svg"
                  alt=""
                />
              </button>
            </div>

            <div className="explore__subContainer">
              <h3>Technology</h3>
              <p>Enhance your skills in the ever-evolving field of</p>
              <p>technology. Our technology mentors can guide</p>
              <p>you in areas such as software development,</p>
              <p>web design, data science, cybersecurity,</p>
              <p>artificial intelligence, and more</p>
              <button className="explore__subContainer-Btn">
                Read More
                <img
                  className="explore__subContainer-Btn__Vector"
                  src="/exploreContainerVector.svg"
                  alt=""
                />
              </button>
            </div>
          </div>

          <button className="explore__bodyContent-Btn">
            Find Your Mentor
            <img
              className="explore__bodyContent-Btn__Vector"
              src="/exploreBodyBtnVector.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Explore