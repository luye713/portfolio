import React, {useState} from "react";
import './Contact.css'

export default function Contact(props) {
    return (
        <div id='contact' class="section">
            <h3>CONTACT</h3>
            <p>I would love to hear from you. <br/>Email me at <b>luye0713@gmail.com</b> or click below!</p>
            <a target="_blank" class="button" href="mailto:luye0713@gmail.com">Let's talk</a>
        </div>
    )
}