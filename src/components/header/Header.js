import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="cc__header-container">
      <div className="cc__header-title">
        <h2>My name is Cody Reeves,</h2>
        <h2>
          <h3>
            and I'm a <br />
          </h3>
          <span className="text-bold software-developer">
            {' '}
            Software Developer
          </span>
        </h2>
        <a className="cc__header-projects-btn" href="#projects">
          My Projects
        </a>
      </div>
      <div className="cc__header-img-container">
        <img
          className="cc__header-img h-img1"
          src="/media/CodyCodes-animated-text-skewed.gif"
          alt="CodyCodes"
        ></img>
        <img
          className="cc__header-img h-img2"
          src="/media/CodyPortfolioAnim.gif"
          alt="A GIF of someone typing at a desk"
        ></img>
      </div>
    </div>
  );
};

export default Header;
