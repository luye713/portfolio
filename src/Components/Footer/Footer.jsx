import React from "react";
import './Footer.css'
import { HashLink } from 'react-router-hash-link'
import { FaGithub, FaLinkedin, FaAngleUp } from "react-icons/fa";

export default function Footer(props) {
    return (
        <div>
            <p id="to-top"><HashLink to='#home'><FaAngleUp/></HashLink></p>
            <div class="social-icons">
                <a href="https://github.com/luye713" target="_blank"><FaGithub/></a>
                <a href="http://linkedin.com/in/luye" target="_blank"><FaLinkedin/></a>
            </div>
            <div id="copyright">©2022 Designed by Lu Ye</div>
        </div>
    )
}