import React, { useState } from 'react';
import './projects.css';
import Project from './project/Project.js';
import Popup from '../Popup/Popup';

const Projects = () => {

    const [showPopupFirst, setShowPopupFirst] = useState(false);
    const [showPopupSecond, setShowPopupSecond] = useState(false);
    const [showPopupThird, setShowPopupThird] = useState(false);


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
                />
                <Project 
                className="cc_project p2" 
                imgUrl="/media/portfolio.project--bfb-thumbnail.png" 
                projectName="Bored Fren Boards"
                popupState={showPopupSecond}
                popupShowFunction={() => setShowPopupSecond(true)}
                popupCloseFunction={() => setShowPopupSecond(false)}
                />
                
                <Project 
                className="cc_project p3" 
                imgUrl="/media/portfolio-project--memories-thumbnail.png"  
                projectName="Memories App"
                popupState={showPopupThird}
                popupShowFunction={() => setShowPopupThird(true)}
                popupCloseFunction={() => setShowPopupThird(false)}
                />
            </div>
            
        </div>
    )
}

export default Projects;