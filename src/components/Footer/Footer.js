import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="cc__footer-container">
        <div className="cc__footer-wrapper">
        <div classname="cc__footer-spacer"></div>
        <div className="cc__footer-cta-container">
        <h3 className="cc__footer-cta cta1">Need a website for your business?</h3>
        <h3 className="cc__footer-cta cta2">Looking to hire a passionate developer?</h3>

        <Link className="cc__footer-contact-button" to="/Contact" onClick={() => window.scrollTo(0,0)}><p>Contact me</p></Link>
        <div className="cc__footer-contact-links">
          <a href="https://github.com/TechnoGecko"><FaGithub size={45} color="#5B29A6"/></a>
          <a href="https://www.linkedin.com/in/codingreeves/"><FaLinkedin size={45} color="#5b29a6"/></a>
        </div>
        </div>
        <div className="cc__footer-img-container">
            <img src="/media/CodyPortfolioAnim.gif"/>
        </div>
        
        </div>
    </div>
  )
}

export default Footer