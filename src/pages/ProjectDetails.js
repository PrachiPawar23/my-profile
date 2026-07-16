import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiChevronRight, HiChevronLeft, HiArrowLeft, HiMenu } from "react-icons/hi";
import { projects } from "../utils/projectsData";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id, 10);
  const [zoomIndex, setZoomIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close zoom on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setZoomIndex(null);
      if (e.key === "ArrowRight" && zoomIndex !== null) nextImage(e);
      if (e.key === "ArrowLeft"  && zoomIndex !== null) prevImage(e);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomIndex]);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  const currentProject = projects.find((p) => p.id === projectId);

  if (!currentProject) {
    return (
      <div className="project-details-wrapper">
        <div className="project-details-container" style={{ alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "var(--text-muted)" }}>Project not found.</p>
          <button className="back-button" onClick={() => navigate("/")}>
            <HiArrowLeft size={18} /> Go Home
          </button>
        </div>
      </div>
    );
  }

  const hasVideos      = currentProject.videos?.length > 0;
  const hasScreenshots = currentProject.screenshots?.length > 0;
  const hasMedia       = hasVideos || hasScreenshots;
  const hasReferences  = Array.isArray(currentProject.references)
    ? currentProject.references.length > 0
    : !!currentProject.references;

  const openZoom  = (index) => setZoomIndex(index);
  const closeZoom = () => setZoomIndex(null);

  const nextImage = (e) => {
    e?.stopPropagation();
    setZoomIndex((prev) =>
      prev === currentProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setZoomIndex((prev) =>
      prev === 0 ? currentProject.screenshots.length - 1 : prev - 1
    );
  };

  const handleNavigate = (pid) => {
    navigate(`/projects/${pid}`);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="project-details-wrapper">

      {/* ── Mobile sidebar toggle ── */}
      {isMobile && (
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen((o) => !o)}
          title="Toggle project list"
        >
          <HiMenu size={20} />
        </button>
      )}

      {/* ── Sidebar overlay (mobile) ── */}
      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Project list sidebar ── */}
      <aside className={`project-sidebar${sidebarOpen ? " open" : ""}`}>
        <h3>All Projects</h3>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              className={project.id === projectId ? "active" : ""}
              onClick={() => handleNavigate(project.id)}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* ── Main content ── */}
      <main className="project-details-container">

        {/* Header */}
        <div className="project-header">
          <HiArrowLeft
            className="back-button"
            size={18}
            onClick={() => navigate("/")}
            title="Back to home"
          />
          <div className="project-details-title">
            <h3>{currentProject.title}</h3>
            {currentProject.featured && (
              <span className="project-details-featured-tag">Featured</span>
            )}
          </div>
        </div>

        {/* Year */}
        <section className="project-year">
          <h3>Year</h3>
          <p>{currentProject.year}</p>
        </section>

        {/* Abstract */}
        <section className="project-abstract">
          <h3>About</h3>
          <p>{currentProject.abstract}</p>
        </section>

        {/* Tech Stack */}
        {currentProject.techStack?.length > 0 && (
          <section className="project-techstack">
            <h3>Tech Stack</h3>
            <ul>
              {currentProject.techStack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Media: videos + screenshots */}
        {hasMedia && (
          <section className="project-media">

            {hasVideos && (
              <>
                <h3>Videos</h3>
                <div className="videos-container">
                  {currentProject.videos.map((videoUrl, idx) => {
                    const isPortrait = videoUrl.includes("portrait");
                    return (
                      <video
                        key={idx}
                        src={videoUrl}
                        className={isPortrait ? "portrait-video" : "landscape-video"}
                        controls
                        preload="metadata"
                        playsInline
                      />
                    );
                  })}
                </div>
              </>
            )}

            {hasScreenshots && (
              <>
                <h3>Screenshots</h3>
                <div className="screenshots-container">
                  {currentProject.screenshots.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`${currentProject.title} screenshot ${idx + 1}`}
                      className="screenshot"
                      onClick={() => openZoom(idx)}
                      loading="lazy"
                    />
                  ))}
                </div>
              </>
            )}

          </section>
        )}

        {/* References */}
        {hasReferences && (
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

      </main>

      {/* ── Zoom modal ── */}
      {zoomIndex !== null && (
        <div className="zoom-modal" onClick={closeZoom}>
          <button className="zoom-arrow left" onClick={prevImage} title="Previous">
            <HiChevronLeft size={24} />
          </button>

          <img
            src={currentProject.screenshots[zoomIndex]}
            alt={`${currentProject.title} screenshot ${zoomIndex + 1}`}
            className="zoomed-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="zoom-arrow right" onClick={nextImage} title="Next">
            <HiChevronRight size={24} />
          </button>
        </div>
      )}

    </div>
  );
};

export default ProjectDetails;
