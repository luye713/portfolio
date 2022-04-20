import React from "react";
import './Skills.css';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaSass, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { SiJavascript, SiCss3, SiExpress, SiMongodb, SiPostgresql, SiHeroku, SiSocketdotio, SiDjango } from 'react-icons/si'
import { DiDjango, DiCss3, DiJqueryLogo, DiPostgresql } from 'react-icons/di'

export default function Skills(props) {
    return (
        <div id="skills" class="section">
            <h3>SKILLS</h3>
            <section>
                <div class="skill"><FaReact />
                <span>React</span></div>
                <div class="skill"><SiJavascript />
                <span>Javascript</span></div>
                <div class="skill"><FaPython />
                <span>Python</span></div>
                <div class="skill"><SiDjango />
                <span>Django</span></div>
                <div class="skill"><FaHtml5 />
                <span>HTML5</span></div>
                <div class="skill"><FaCss3Alt />
                <span>CSS3</span></div>
                <div class="skill"><FaSass />
                <span>SASS</span></div>
                <div class="skill"><DiJqueryLogo />
                <span>Jquery</span></div>
                <div class="skill"><FaNodeJs />
                <span>NodeJS</span></div>
                <div class="skill"><SiExpress />
                <span>Express</span></div>
                <div class="skill"><SiMongodb />
                <span>Mongodb</span></div>
                <div class="skill"><SiPostgresql />
                <span>Postgresql</span></div>
                <div class="skill"><FaAws />
                <span>AWS</span></div>
                <div class="skill"><SiSocketdotio />
                <span>Socket.io</span></div>
                <div class="skill"><FaGitAlt />
                <span>Git</span></div>
                <div class="skill"><SiHeroku />
                <span>Heroku</span></div>
            </section>
        </div>
    )
}