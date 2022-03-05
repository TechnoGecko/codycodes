import React from 'react';
import './technologies.css';
import { FaReact, FaNodeJs, FaEthereum, FaUnity} from 'react-icons/fa';

const Technologies = () => {
    return (
        <div className="cc__technologies-container">
            <h3 className="cc__technologies-text">I love learning new technologies -- these are some of my favorites so far:</h3>
            <div className="cc__technologies-images">
                <div className="cc__technology t1"><FaReact size={64} color="#e3e3e3"/><p className="cc__technology-name tn1">ReactJS</p></div>
                <div className="cc__technology t2"><FaEthereum size={64} color="#e3e3e3"/><p className="cc__technology-name tn2">Solidity</p></div>
                <div className="cc__technology t3"><FaUnity size={64} color="#e3e3e3"/><p className="cc__technology-name tn3">Unity</p></div>
                 
            </div>
        </div>
    )
}

export default Technologies;