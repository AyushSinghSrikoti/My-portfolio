// Resume.js

import React from "react";
import "../css/resume.css";

export default function Resume() {
    return (
        <div className="resume-container">
            <h2 className="resume-title">My Resume</h2>
            <p className="resume-text">
            Exploring my journey and capabilities , you'll find key details about my education, skills, and experiences below.
            </p>
            <p className="resume-text">
                <strong>Education:</strong>
                <br />
                Maharaja Surajmal Institue of Technology,<br/> Btech in Computer Science,<br/> 2021-2025
            </p>
            <p className="resume-text">
                <strong>Skills:</strong>
                <br />
                MERN Stack , C/C++ , HTML , CSS , Javascript 
            </p>
            <p className="resume-text">
                <strong>Experience:</strong>
                <br />
                Coding Ninjas, TAship, 30 August 2023 - 30 October 2023
                <br />
                Worked as a TA with coding ninjas with a overall rating of 4.8 out of 5. 
            </p>
            <p className="resume-text">
                Feel free to download my resume using the link below to know more about me:
                <a href="https://drive.google.com/drive/folders/1O6TNygjZ62KewF281zCPKpDzBJEE0vLq?usp=drive_link" download className="resume-download-link">Download Resume</a>
            </p>
        </div>
    );
}
