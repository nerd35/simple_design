import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="py-5 mx-auto footer-container text-light">
      <div className="container py-5 mx-auto">
        <div className="mx-auto row">
          <div className="col-md-4">
            <h3 className="footer-title">About Me</h3>
            <p className="mt-3 footer-text">
              Do you want to be even more successful? Learn to love learning and
              growth. The more effort you put into improving your skills,
            </p>
          </div>
          <div className="justify-center align-center col-md-4">
            <h3 className="mx-auto footer-title">Quick Links</h3>
            <h5 className="mt-3 mb-0 quick-links">Home</h5>
            <h5 className="mt-1 mb-0 quick-links">About</h5>
            <h5 className="mt-1 quick-links">Contact</h5>

          </div>
          <div className="col-md-4">
              
            <h3 className="footer-title">Follow me</h3>
            <p className="mt-3 mb-0 footer-text">Follow on social Media</p>
            <div className="mt-0">
            <span class=" quick-links me-3"><FaFacebookF/></span>
            <span class=" quick-links me-3"><FaTwitter/></span>
            <span class=" quick-links me-3"><FaLinkedinIn/></span>
            <span class=" quick-links me-3"><FaWhatsapp/></span>
            </div>
          </div>
        </div>
        <p class=" quick-links mt-3">Copyright ©2021 All rights reserved | This template is made with <span className="text-danger"><FaHeart/></span>  by <strong className="text-info">Nerd35</strong></p>
      </div>
    </div>
  );
};

export default Footer;
