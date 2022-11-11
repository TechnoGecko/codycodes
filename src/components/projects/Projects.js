import React, { useState } from 'react';
import './projects.css';
import Project from './project/Project.js';
import GameProject from './project/GameProject';
import Popup from '../Popup/Popup';

const Projects = () => {
  const [showPopupFirst, setShowPopupFirst] = useState(false);
  const [showPopupSecond, setShowPopupSecond] = useState(false);
  const [showPopupThird, setShowPopupThird] = useState(false);
  const [showPopupFourth, setShowPopupFourth] = useState(false);
  const [showPopupFifth, setShowPopupFifth] = useState(false);
  const [showPopupSixth, setShowPopupSixth] = useState(false);

  return (
    <div className="cc__projects-container" id="projects">
      <h1 className="cc__projects-title">Some of My Work</h1>
      <div className="cc__projects-proj-container">
        <Project
          className="cc_project p1"
          imgUrl="/media/portfolio-project--rmnw-thumbnail1.png"
          projectName="Railmakers NW"
          popupState={showPopupFirst}
          popupShowFunction={() => setShowPopupFirst(true)}
          popupCloseFunction={() => setShowPopupFirst(false)}
          projectText="This was a redesign of a small business website, using React and a library called EmailJS to add a contact form that went directly to the business's email."
          gitUrl="https://github.com/TechnoGecko/railmakers-nw"
          webUrl="https://www.railmakersnw.com/"
        />

        <Project
          className="cc_project p4"
          imgUrl="/media/portfolio-project--fr-ecommerce-thumbnail.png"
          projectName="Ecommerce App"
          popupState={showPopupFourth}
          popupShowFunction={() => setShowPopupFourth(true)}
          popupCloseFunction={() => setShowPopupFourth(false)}
          projectText="This was a collaborative project with myself and another developer: we decided to learn Typescript, and built an e-commerce website with the MERN stack. We used Axios and Express to retrieve and display our product data from MongoDB in our React application. I also implemented Cypress to create End to End tests for the current application flow, and we look forward to adding even more functionality to this app down the road!"
          gitUrl="https://github.com/AndrewJFleming/fleming-reeves-ecommerce"
          webUrl="https://fleming-reeves-ecommerce.netlify.app/"
        />

        <Project
          className="cc_project p2"
          imgUrl="/media/portfolio.project--bfb-thumbnail.png"
          projectName="Bored Fren Boards"
          popupState={showPopupSecond}
          popupShowFunction={() => setShowPopupSecond(true)}
          popupCloseFunction={() => setShowPopupSecond(false)}
          projectText="The mint site for an upcoming NFT project. I designed this in Figma, then used Photoshop to edit the photos to fit the design. Will be adding Metamask wallet connectivity with Solidity. "
          gitUrl="https://github.com/TechnoGecko/bored-frens-mint-site"
          webUrl="https://bored-fren-boards.netlify.app/"
        />

        <GameProject
          className="cc_project p3"
          imgUrl="/media/GNASH_logo_glow.png"
          videoUrl="/media/GnashVideo.mp4"
          projectName="Gnash (Video Game)"
          popupState={showPopupThird}
          popupShowFunction={() => setShowPopupThird(true)}
          popupCloseFunction={() => setShowPopupThird(false)}
          projectText="An Action Platformer, with a heavy focus on story. My main focus with this project so far was creating a 2D character controller that feels natural, so I implemented a state machine to allow for the character to evolve and gain new movement skills. "
          gitUrl="https://github.com/TechnoGecko/MicrobialNightmare"
          hasGit={true}
        />

        <GameProject
          className="cc_project p5"
          imgUrl="/media/d20.jpg"
          videoUrl="/media/InitTrackerCPP.mp4"
          projectName="DnD CLI Tool"
          popupState={showPopupFifth}
          popupShowFunction={() => setShowPopupFifth(true)}
          popupCloseFunction={() => setShowPopupFifth(false)}
          projectText="This is a small CLI program which was born out of necessity. After running my first game of Dnd for my friends, I realized how tedious and difficult tracking everyone's initiative order in combat could become. So naturally, I thought 'how can I automate this?'. "
          gitUrl="https://github.com/TechnoGecko/DnD-Initiative-Tracker"
          hasGit={true}
        />

        <GameProject
          className="cc_project p6"
          imgUrl="/media/StayWithMe.png"
          videoUrl="/media/StayWithMe.mp4"
          projectName="Stay With Me!"
          popupState={showPopupSixth}
          popupShowFunction={() => setShowPopupSixth(true)}
          popupCloseFunction={() => setShowPopupSixth(false)}
          projectText="This was a game I worked on as a solo participant in the 48 hour Ludem Dare game jam. My inspiration was to make a game my girlfriend might like, as she's not a huge gamer. The idea is, the plant needs constant attention as if the water or sunlight levels get too low/high it will take damage. I wanted to add environmental distractions such as bugs (hence the fly swatter) and a cat which would need to be deterred via the spray bottle. "
          gitUrl="https://github.com/TechnoGecko/MicrobialNightmare"
          hasGit={false}
        />
      </div>
    </div>
  );
};

export default Projects;
