import React from "react";
// import { Link } from "react-router-dom";
import "../css/projectPreview.css";

export default function ProjectsPreview({ title, desc, techStack, image, githubLink }) {
    const containerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "10px",
        backgroundRepeat: "no-repeat"
    };

    return (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <div className="single-project-container">
                <div className="project-image2" style={containerStyle}></div>
                <div className="project-title2">{title}</div>
                <div className="project-desc2">{desc}</div>
                <div className="techStackTags">
                    {techStack.map((tech, index) => (
                        <button key={index} className="tech-button">
                            {tech}
                        </button>
                    ))}
                </div>
            </div>
        </a>
    );
}
