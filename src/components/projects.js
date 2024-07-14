import React from "react";
import { projects } from "../data/projectData";
import ProjectsPreview from "./projectsPreview";
import "../css/projects.css";

export default function Project() {
    return (
        <div className="project-page">
            <h1 className="common-heading">Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <a key={index} href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ProjectsPreview 
                            title={project.title}
                            desc={project.desc}
                            techStack={project.techStack}
                            image={project.image}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
