import React from "react";
import './Home.css'
import { HashLink } from 'react-router-hash-link'
import Profilephoto from '../../Documents/lu.JPG'

export default function Home(props){
    return (
        <div id="home-banner" class="section">
            <img class="profile-photo" src={Profilephoto}></img>
            <section class="hi-wrapper">
                <h1><span>Hello, my name is </span><b>Lu Ye.</b></h1>
                <p class="intro">I am a <b>software developer</b> with experience in building fluid, full-stack web applications.</p>
                <HashLink to='#about' class="button">Learn more</HashLink>
            </section>
        </div>
    )
}