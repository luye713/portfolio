import React from "react";
import './ProjectCard.css'

export default function(props) {
    return (
        <div class="card">
            <h5>{props.title}</h5>
            <p class="card-description">{props.description}</p>
            <p class="techs">{props.tech}</p>
            <p class="login-info">{props.login}</p>
            <div class="buttons">
                <a class="button" href={props.githubLink} target='_blank'>Github</a>
                <a class="button button-2" href={props.link} target='_blank'>Live</a>
            </div>
        </div>
    )
}