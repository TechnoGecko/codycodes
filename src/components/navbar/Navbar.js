import React, {useEffect} from 'react';
import './navbar.css';
import { Routes, Route, Link} from 'react-router-dom';

const Navbar = () => {

  

    
    return (
        <div className="cc__navbar-container">
            <img src="/media/CC-favicon.png" alt="CodyCodes logo"/>
            <div className="cc__navbar-nav-links" id="navbar">
                    <Link className="cc__navbar-nav-link link1" to="/" onClick={() => window.scrollTo(0, 0)}>Projects</Link>
                    <Link className="cc__navbar-nav-link link2" to="/About" onClick={() => window.scrollTo(0, 0)}>About</Link>
                    <Link className="cc__navbar-nav-link link3" to="/Contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
            </div>
            
        </div>
    )
}

export default Navbar;