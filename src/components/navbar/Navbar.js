import React, {useEffect} from 'react';
import './navbar.css';
import { Routes, Route, Link} from 'react-router-dom';

const Navbar = () => {

  

    
    return (
        <div className="cc__navbar-container">
            <img src="/media/CC-favicon.png" alt="CodyCodes logo"/>
            <div className="cc__navbar-nav-links" id="navbar">
                    <a className="cc__navbar-nav-link link1" href="#projects">Projects</a>
                    <a className="cc__navbar-nav-link link2" href="#About">About</a>
                    <a className="cc__navbar-nav-link link3" href="#Contact">Contact</a>

            </div>
            
        </div>
    )
}

export default Navbar;