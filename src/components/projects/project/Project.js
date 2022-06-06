import React, { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './project.css';
import Popup from '../../Popup/Popup';

const Project = (props) => {

    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);

    const onLeftClick = () => {
        setLeftClicked(true);
        console.log("leftClicked set to: " + leftClicked)
        setTimeout(setLeftClicked(false), 4000);
        console.log("leftClicked set to: " + leftClicked)
    }

    const onRightClick = () => {
        setRightClicked(true);
        console.log("rightClicked set to: " + rightClicked)
        setTimeout(setRightClicked(false), 4000);
        console.log("rightClicked set to: " + rightClicked)
    }

    return (
        <div className="cc__project-container">
            <div className="cc__project-img-container">
                <div className="cc__project-img-container-overlay" onClick={props.popupShowFunction}></div>
                <img src={props.imgUrl} alt="a screenshot of one project"></img>
            </div>
            <div className="cc__project-info">
                <p className="cc__project-title" onClick={props.popupShowFunction}>{props.projectName}</p>

            </div>
            <div className="cc__project-nav">
                <div className="cc__project-dpad" id="dpad">
                    <div className="cc__project-dpad-button d-pad-left" onClick={onLeftClick}>

                    </div>
                    <div className="cc__project-dpad-button d-pad-right" onClick={onRightClick}>
                        
                    </div>
                </div>
                <div className="cc__project-buttons">
                <div className="cc__projects-git">
                    <a className="cc__projects-git-link" href={props.gitUrl} target="_blank"><Tippy content="View on Github">
                    <div className="cc__projects-git-img"></div>
                
                </Tippy></a>
                
                </div>
                <div className="cc__projects-web">
                    <a className="cc__projects-web-link" href={props.webUrl} target="_blank"><Tippy content="View live website">
                <div className="cc__projects-web-img"></div>
                
                </Tippy></a>
                
                </div>
                  
                </div>
            </div>
            <Popup trigger={props.popupState} webUrl={props.webUrl} gitUrl={props.gitUrl} closeFunction={props.popupCloseFunction} imageUrl={props.imgUrl} projectName={props.projectName} projectText={props.projectText}></Popup>
        </div>
    )
}

export default Project;