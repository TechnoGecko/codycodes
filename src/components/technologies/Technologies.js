import React from 'react';
import './technologies.css';
import { FaReact, FaNodeJs, FaEthereum, FaUnity, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';

const Technologies = () => {
    return (
        <div className="cc__technologies-container">
            <h1 className="cc__technologies-title">My Skills</h1>
            <h3 className="cc__technologies-text">I love learning new technologies -- these are some of my favorites so far:</h3>
            <div className="cc__technologies-images">
                <div className="cc__technology t1"><FaHtml5 size={64} color="#e3e3e3"/><p className="cc__technology-name tn1">HTML5</p></div>
                <div className="cc__technology t2"><FaCss3Alt size={64} color="#e3e3e3"/><p className="cc__technology-name tn2">CSS</p></div>
                <div className="cc__technology t3"><FaBootstrap size={64} color="#e3e3e3"/><p className="cc__technology-name tn3">Bootstrap</p></div>
                <div className="cc__technology t4"><FaReact size={64} color="#e3e3e3"/><p className="cc__technology-name tn4">ReactJS</p></div>
                <div className="cc__technology t5"><SiSolidity size={64} color="#e3e3e3"/><p className="cc__technology-name tn5">Solidity</p></div>
                <div className="cc__technology t6"><FaUnity size={64} color="#e3e3e3"/><p className="cc__technology-name tn6">Unity</p></div>
                 
            </div>
        </div>
    )
}

export default Technologies;