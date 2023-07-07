import React from 'react'
import "./Body.css"

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="body__contents">
          <div className="body__textArea">
            <h2 className="body__textArea-header">At Mentor Hub</h2>
            <div className="body__textArea-body">
              <p>We believe in the power of mentorship.</p>
              <p>We provide a platform where passionate individuals</p>
              <p>like you can share your expertise and make a</p>
              <p>positive impact on others. Whether you're an</p>
              <p>experienced professional, an industry expert,</p>
              <p>or a seasoned entrepreneur, Mentor Hub offers you</p>
              <p>the opportunity to connect with mentees, guide</p>
              <p>them on their journey, and shape their future.</p>
            </div>
            <button className="bodytextArea-Btn">Learn More <img src="/headerBodyBtnVector.svg"/> </button>
          </div>
          <img className="body__imageArea" src="/bodyImage1.jpeg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Body