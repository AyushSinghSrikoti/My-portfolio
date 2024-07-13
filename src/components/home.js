import React from "react";
import "../css/home.css"; 
import { Link } from "react-router-dom";
import ProjectsPreview from "./projectsPreview";
import { projects } from "../data/projectData";
import { FaCode } from "react-icons/fa6";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-container">
      <div className="wrapper">
        <div>I am a</div>
        <div className="words">
          <span className="word">Developer</span>
          <span className="word">Programmer</span>
          <span className="word">Engineer</span>
          <span className="word">Student</span>
        </div>
      </div>
      <div className="bout-meh">
        <div>Embarking on a journey of crafting intricate code, immersing in the world of technology, and indulging in the mesmerizing artistry of polished user interfaces.</div>
        <div><button className="bout-meh-button"><Link to="/about" className="link-style2" onClick={scrollToTop}>More About Me →</Link></button></div>
      </div>
      <div className="home-heading-p"><h1>Projects</h1><FaCode style={{fontSize: "5vh"}}/></div>
      <div className="project-lab">
        {featuredProjects.map((project, index) => (
          <ProjectsPreview
            key={index} 
            title={project.title}
            desc={project.desc}
            techStack={project.techStack}
            image={project.image}
          />
        ))}
        <div><button className="bout-meh-button"><Link to="/projects" className="link-style2" onClick={scrollToTop}>All Projects →</Link></button></div>
      </div>
    </div>
  );
}