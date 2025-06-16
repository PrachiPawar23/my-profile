import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiChevronDoubleRight } from "react-icons/hi";
import { projects } from "../utils/projectsData";
import "./Project.css";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`project-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      title="Click to flip"
    >
      <div className={`project-inner ${flipped ? "flipped" : ""}`}>
        <div className="project-front">
          <h3>{project.title}</h3>
          <p>
            {project.abstract.length > 120
              ? `${project.abstract.substring(0, 120)}...`
              : project.abstract}
          </p>

          <span
            className="project-details"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            View Details <HiArrowRight className="r-arrow" />
          </span>
        </div>
        <div className="project-back">
          <h4>Tech Stack</h4>
          <p>{project.techStack.join(", ")}</p>
          <span
            className="project-details"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            View Details <HiArrowRight className="r-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const navigate = useNavigate();

  return (
    <section id="projects">
      <div className="project-section">
        <div className="project-title">
          <h1>Projects</h1>
          <button className="view-all-button" onClick={() => navigate("/projects/1")}>
            <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
              <span><i>View All</i></span>
              <HiChevronDoubleRight />
            </div>
          </button>
        </div>
        <div className="project-container">
          <div className="project-scroll-inner">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} title="Click to Flip" />
            ))}
          </div>
          <div className="project-scroll-inner clone">
            {projects.map((project) => (
              <ProjectCard key={`clone-${project.id}`} project={project} title="Click to Flip" />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Project;
