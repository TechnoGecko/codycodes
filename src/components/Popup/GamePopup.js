import React from 'react';
import './popup.css';
import { GrClose } from 'react-icons/gr';

const GamePopup = (props) => {
  const clickOutsidePopup = () => {
    console.log(this?.id);
  };

  return props.trigger ? (
    <div
      className="cc__popup-container"
      id="outer"
      onClick={() => clickOutsidePopup()}
    >
      <div className="cc__popup-inner" id="inner">
        <button className="close-btn" onClick={props.closeFunction}>
          <div className="close-line l1" />
          <div className="close-line l2" />
        </button>
        <div className="cc__popup-img-container">
          {/* <video
            className="cc__popup-img"
            src={props.videoUrl}
            alt="project thumbnail"
          ></video> */}
          <video
            className="cc_popup-video"
            width="100%"
            height="auto"
            controls
          >
            <source src={props.videoUrl} type="video/mp4" />
          </video>
        </div>

        <h1 className="cc__popup-title">{props.projectName}</h1>
        <p className="cc__popup-description">{props.projectText}</p>

        <div className="cc__popup-links">
          {props.hasGit && (
            <a
              className="cc__popup-link popup-git-link"
              href={props.gitUrl}
              target="_blank"
              rel="noreferrer"
            >
              <p>View on Github</p>
            </a>
          )}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default GamePopup;
