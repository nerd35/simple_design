import React from "react";
import HeaderImg from '../../assets/headerimg.jpg'

const Header = () => {
  return (
    <div className="header-section">
      <div className="container py-3">
        <div className="py-3 row">
          <div className="py-5 col-md-6">
            <h2 className="mt-3 header-title">This is a simple title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim. sed do eiusmod tempor incididunt.
            </p>
            <div className="">
                <span className="btn-trans me-3"> Get Started</span>
                <span className="btn-white "> Dashboard</span>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
              <img src={HeaderImg} alt="headerimage" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
