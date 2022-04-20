import React from "react";
import './Navbar.css'
import { HashLink } from 'react-router-hash-link'

export default function Navbar(props) {
    return (
        <div id="main-nav">
            <HashLink to='#home'>Home</HashLink>
            <HashLink to='#about'>About</HashLink>
            <HashLink to='#projects'>Projects</HashLink>
            <HashLink to='#contact'>Contact</HashLink>
        </div>
    )
}