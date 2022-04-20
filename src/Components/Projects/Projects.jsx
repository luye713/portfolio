import React from "react";
import './Projects.css'
import ProjectCard from "../ProjectCard/ProjectCard";

export default function (props) {
    return (
        <div id='projects' class="section">
            <h3>PROJECTS</h3>

            <div class="project-cards">

            <ProjectCard
                title="The Exhibit"
                description="The Exhibit allows students in the technology field to showcase their side projects to recruiters and other students and gain feedback on their projects. This project is hosted on Heroku."
                tech="React, Node.js, Express, MongoDB, Socket.io, AJAX, JWT authentication, AWS S3, React Hooks, Material UI, HTML5, CSS3"
                login="Username: guestlogin password: welcome123"
                githubLink="https://github.com/joshnguyentoronto/project-sharing-app"
                link="https://the-exhibit.herokuapp.com/"
            />
            <ProjectCard
                title="S'more Recipes"
                description="S'more Recipes is a full CRUD web app that allows users to plan their camping meals. Registered users can create camping trips, choose equipments for cooking, and add recipes to their trip. This project is hosted on Heroku."
                tech="Python, Django, Postgresql, HTML5, CSS3, SASS"
                login="Username: guestlogin password: welcome123"
                githubLink="https://github.com/luye713/SmoreRecipes"
                link="https://smorerecipes.herokuapp.com/"
            />
            <ProjectCard
                title="Budget Meets World"
                description="A hackathon project created to help users plan their trip without hurting their budget. Users can add flights, accomomations and restaurants that are within the budget to their trip.This project is hosted on Heroku."
                tech="React, Node.js, Express, MongoDB, AJAX Axios, JWT authentication, Hotels API, YELP API, Skyscanner API, HTML5, CSS3"
                login="Username: guestlogin password: welcome123"
                githubLink="https://github.com/JChapman13/budget-meets-world"
                link="https://budget-meet-world.herokuapp.com/account/login"
            />
            <ProjectCard
                title="Animal Crossing Guide"
                description="A guide for Nitendo's Animal Crossing: New Horizons. This app provides a comprehensive information about the villagers."
                tech="Javascript, Node.js, Express, MongoDB, Google OAuth, ACNH API, HTML5, CSS3."
                githubLink="https://github.com/luye713/animal-crossing-guide"
                link="https://animal-crossing-guide.herokuapp.com/"
            />
            <ProjectCard 
                    title="Simon"
                    description="Simon is a retro, classic game that gained popularity in the 1980s. It is a memory game in which players must repeat the random sequence of flashing lights by pressing the colored pads in the correct order."
                    tech="Javascript, HTML5, CSS3"
                    githubLink="https://github.com/luye713/Simon"
                    link="https://luye713.github.io/Simon/"
            />

            </div>
        </div>
    )
}