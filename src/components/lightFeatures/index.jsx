import React from 'react'
import { Link } from 'react-router-dom'
import ShowcaseImg from '../../assets/display.png'

const LightFeatures = () => {
    return (
        <div className=" unique-feature-section bg-light">
        <div className="container">
          <div className="py-5 row">
          <div className=" col-md-5">
                <img src={ShowcaseImg} alt="" className="mt-5 showcaseImg" />
            </div>
            <div className="mx-auto justify-content-center col-md-5 ">
              <h2 className="mt-5 unique-title">
                We’ve made a life
                <br /> that will change you
              </h2>
              <h6 className="unique-sub-title">
                We are here to listen from you deliver exellence
              </h6>
              <p className="unique-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod<br/> temp or incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <Link to="/dashboard" className="dashboard-btn">Get Started Now</Link>
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default LightFeatures
