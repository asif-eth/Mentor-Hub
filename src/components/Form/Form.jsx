import React from 'react'
import "./Form.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Form = () => {
  return (
    <>
      <div className="formPage__mainHeader">
        <Header />
      </div>

      <div className="formBody">
        <div className="form__containerTop">
          <div className="formLeftSection">
            <div className="formLabel">Personal Information :</div>
            <div className="formUploadImg">
              <img src="/formDummyPhoto.jpeg" alt="Form Image" />
            </div>
            <div className="formUploadImgBtn">Upload Photo</div>
          </div>

          <div className="formRightSection">
            <form className="formInputs">
              <input
                className="formInput"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="formInput"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="formInput"
                type="number"
                placeholder="Phone Number"
              />
              <input className="formInput" type="date" />
            </form>
          </div>
        </div>

        <div className="form__containerBottom">
          <div className="formLabel">Area of Expertise :</div>

          <div className="expertise__options">
            <select className="expertise_options-style" defaultValue="">
              <option value="" className="placeholder" disabled>
                Category
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <select className="expertise_options-style" defaultValue="">
              <option value="" className="placeholder" disabled>
                Sub Category
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="formLabel">Availablity :</div>
          <div className="availablityOption">
            <select className="expertise_options-style" defaultValue="">
              <option value="" className="placeholder" disabled>
                Available
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="formLabel">About Experience :</div>
          <div className="textArea">
            <textarea name="experience" className="textWritingArea"></textarea>
          </div>

          <div className="registerBtn">
            <button className="registerButton">
              Register
              <img src="/registerBtnVector.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Form
