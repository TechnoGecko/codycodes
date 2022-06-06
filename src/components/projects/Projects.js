import React, { useState } from 'react';
import './projects.css';
import Project from './project/Project.js';
import Popup from '../Popup/Popup';

const Projects = () => {

    const [showPopupFirst, setShowPopupFirst] = useState(false);
    const [showPopupSecond, setShowPopupSecond] = useState(false);
    const [showPopupThird, setShowPopupThird] = useState(false);
    const [showPopupFourth, setShowPopupFourth] = useState(false);



    return (
        <div className="cc__projects-container" id="projects">
            <h1 className="cc__projects-title" >Some of My Work</h1>
            <div className="cc__projects-proj-container" >
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
                
                
                <Project 
                className="cc_project p3" 
                imgUrl="/media/portfolio-project--memories-thumbnail.png"  
                projectName="Memories App"
                popupState={showPopupThird}
                popupShowFunction={() => setShowPopupThird(true)}
                popupCloseFunction={() => setShowPopupThird(false)}
                projectText="A CRUD application built with the MERN stack, where MongoDB is used to store posts, as well as keep track of likes, user accounts -- also has Google sign in as an option."
                gitUrl="https://github.com/TechnoGecko/memories-project"
                webUrl="https://codycodes-memories-app.netlify.app/"
                />
            </div>
            
        </div>
    )
}

export default Projects;