import React from "react";
import { projects } from "../data/projectData";
import ProjectsPreview from "./projectsPreview";
import "../css/projects.css";

export default function Project(){
    // const {title , desc , techStack} = projects;
    return(
        <>  
            <h1 className="common-heading">Projects</h1>
            <div className="projects-container">
                {projects.map((project,index)=>(
                    <div>
                    <ProjectsPreview title={project.title}
                                     desc={project.desc}
                                     techStack={project.techStack}
                                     image = {project.image}/></div>
                ))}
            </div>
        </>
    )
}