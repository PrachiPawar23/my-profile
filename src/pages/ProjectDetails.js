import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiChevronRight, HiChevronLeft, HiArrowLeft } from "react-icons/hi";
import { projects } from "../utils/projectsData";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id, 10);

  const currentProject = projects.find((p) => p.id === projectId);
  const [zoomIndex, setZoomIndex] = useState(null);

  if (!currentProject) {
    return (
      <div className="project-details-container">
        <h3>Project not found</h3>
        <button onClick={() => navigate("/projects")}>Back to Projects</button>
      </div>
    );
  }

  const openZoom = (index) => setZoomIndex(index);
  const closeZoom = () => setZoomIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setZoomIndex((prev) => (prev === currentProject.screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setZoomIndex((prev) => (prev === 0 ? currentProject.screenshots.length - 1 : prev - 1));
  };

  return (
    <div className="project-details-wrapper">
      <aside className="project-sidebar">
        <h3 style={{ marginLeft: '10px' }}>Projects</h3>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              className={project.id === projectId ? "active" : ""}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </aside>

      <main className="project-details-container">
        <div className="project-header">
          <HiArrowLeft onClick={() => navigate("/")} className="back-button" />
          <div className="project-details-title">
            <h3>{currentProject.title}</h3>
          </div>
        </div>

        <section className="project-year">
          <h3>Year</h3>
          <p>{currentProject.year}</p>
        </section>

        <section className="project-abstract">
          <h3>Abstract</h3>
          <p>{currentProject.abstract}</p>
        </section>

        <section className="project-techstack">
          <h3>Tech Stack</h3>
          <ul>
            {(currentProject.techStack || currentProject.stack?.split(", "))?.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className="project-media">
          {currentProject.videos?.length > 0 && (
            <>
              <h3>Videos</h3>
              <div className="videos-container">
                {currentProject.videos.map((videoUrl, idx) => {
                  const isPortrait = videoUrl.includes("portrait");
                  return (
                    <iframe
                      key={idx}
                      src={videoUrl}
                      title={`Project video ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={isPortrait ? "portrait-video" : "landscape-video"}
                    ></iframe>
                  );
                })}
              </div>
            </>
          )}

          {currentProject.screenshots?.length > 0 && (
            <>
              <h3>Screenshots</h3>
              <div className="screenshots-container">
                {currentProject.screenshots.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Project screenshot ${idx + 1}`}
                    className="screenshot"
                    onClick={() => openZoom(idx)}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        {currentProject.references?.length > 0 && (
          <section className="project-references">
            <h3>Reference</h3>
            <p>
              <a
                href={currentProject.references}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentProject.references}
              </a>
            </p>
          </section>
        )}

        {zoomIndex !== null && (
          <div className="zoom-modal" onClick={closeZoom}>
            <button className="zoom-arrow left" onClick={prevImage}>
              <HiChevronLeft size={40} />
            </button>
            <img
              src={currentProject.screenshots[zoomIndex]}
              alt="Zoomed screenshot"
              className="zoomed-image"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="zoom-arrow right" onClick={nextImage}>
              <HiChevronRight size={40} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetails;