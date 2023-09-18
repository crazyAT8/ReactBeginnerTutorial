import React from 'react';
import ReactImage from '../images/ReactImage.png';

export default function Navbar() {
    return (
        <nav className="navLeft">
            <img src={ReactImage} height="40" width="40" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}