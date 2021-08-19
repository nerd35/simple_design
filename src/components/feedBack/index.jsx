import React from "react";
import { Link } from "react-router-dom";

const FeedBack = () => {
  return (
    <div className="py-5 feedback-container">
      <div className="container py-5 text-center">
        <h1>Got Impressed to our features?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <Link to="/dashboard" className="dashbord-light-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default FeedBack;
