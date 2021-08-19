import React from "react";
import Work from "../../assets/icon-img-1.png";
import Work1 from "../../assets/icon-img-2-1.png";
import Work2 from "../../assets/icon-img-3-1.png";

const HowItWorks = () => {
  return (
    <div className="container py-5 how-it-works">
      <h2 className="text-center"> How It Works</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="py-3 row">
        <div className="col-md-4 how-it-works-div">
          <div className="px-3 py-5">
            <img src={Work} alt="howitwork" />
            <h2>Being Different</h2>
            <p className="">
              Never write an advertisement which you wouldn’t want your family
              to read wouldn’t
            </p>
          </div>
        </div>
        <div className="col-md-4 how-it-works-div">
          <div className="px-3 py-5">
            <img src={Work1} alt="howitwork" />
            <h2>Breaking The Rules</h2>
            <p className="">
              Never write an advertisement which you wouldn’t want your family
              to read wouldn’t
            </p>
          </div>
        </div>
        <div className="col-md-4 how-it-works-div">
          <div className="px-3 py-5">
            <img src={Work2} alt="howitwork" />
            <h2>Product Quality</h2>
            <p className="">
              Never write an advertisement which you wouldn’t want your family
              to read wouldn’t
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
