import React from "react";
import "../css/projectPreview.css";

export default function ProjectsPreview({ title, desc, techStack, image }) {
    const containerStyle = {
        background: `url(${image})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        borderRadius: "10px",
        backgroundRepeat: "no-repeat"
    };

    return (
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
    );
}