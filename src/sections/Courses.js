import React, { useState } from "react";
import { 
  FaCode, 
  FaShieldAlt, 
  FaCloud, 
  FaLinux, 
  FaNetworkWired,
  FaLock,
  FaMobile,
  FaRobot,
  FaGlobe,
  FaPalette,
  FaCertificate,
  FaGraduationCap,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";
import "./Courses.css";

const coursesList = [
  { 
    name: "QA Automation & API Testing", 
    icon: FaCode,
    color: "#34D399",
    status: "completed",
    platform: "Internship | Self-Study"
  },
  { 
    name: "Cypress Test Automation", 
    icon: FaCheckCircle,
    color: "#34D399",
    status: "completed",
    platform: "YouTube"
  },
  { 
    name: "Python for Automation", 
    icon: FaCode,
    color: "#34D399",
    status: "completed",
    platform: "YouTube"
  },
  { 
    name: "Cybersecurity Fundamentals", 
    icon: FaShieldAlt,
    color: "#34D399",
    status: "completed",
    platform: "Self-Study | Certificate Program"
  },
  { 
    name: "Google Cloud Skill Boost Labs", 
    icon: FaCloud,
    color: "#60A5FA",
    status: "completed",
    platform: "Google Cloud"
  },
  { 
    name: "AWS Fundamentals", 
    icon: FaCloud,
    color: "#F59E0B",
    status: "in-progress",
    platform: "AWS Training"
  },
  { 
    name: "Linux Fundamentals", 
    icon: FaLinux,
    color: "#F59E0B",
    status: "in-progress",
    platform: "Self-Study"
  },
  { 
    name: "Computer Networks", 
    icon: FaNetworkWired,
    color: "#60A5FA",
    status: "in-progress",
    platform: "Self-Study"
  },
  { 
    name: "Cryptography & Web Security", 
    icon: FaLock,
    color: "#60A5FA",
    status: "in-progress",
    platform: "Self-Study | Advanced Course"
  },
  { 
    name: "Android Development", 
    icon: FaMobile,
    color: "#34D399",
    status: "completed",
    platform: "Online Course"
  },
  { 
    name: "Generative AI", 
    icon: FaRobot,
    color: "#8B5CF6",
    status: "completed",
    platform: "Online Course"
  },
  { 
    name: "Website Development", 
    icon: FaGlobe,
    color: "#34D399",
    status: "completed",
    platform: "Full Stack"
  },
  { 
    name: "Logo Creation & Digital Product Design", 
    icon: FaPalette,
    color: "#EC4899",
    status: "completed",
    platform: "Creative Design"
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Completed", "In Progress"];
  
  const filteredCourses = filter === "All" 
    ? coursesList 
    : coursesList.filter(c => c.status === filter.toLowerCase().replace(" ", "-"));

  const getStatusIcon = (status) => {
    if (status === "completed") return <FaCheckCircle className="status-icon completed" />;
    if (status === "in-progress") return <FaSpinner className="status-icon in-progress" />;
    return null;
  };

  return (
    <section id="courses">
      <div className="courses-section">
        {/* Header */}
        <div className="courses-header">
          <h2>
            Courses & Certifications
          </h2>
          
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat === "All" ? "🌟 All" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="courses-stats">
          <span className="stat-item">
            <FaGraduationCap />
            {coursesList.filter(c => c.status === "completed").length} Completed
          </span>
          <span className="stat-divider">•</span>
          <span className="stat-item">
            <FaSpinner className="stat-spinner" />
            {coursesList.filter(c => c.status === "in-progress").length} In Progress
          </span>
          <span className="stat-divider">•</span>
          <span className="stat-item">
            <FaCertificate />
            {coursesList.length} Total
          </span>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <div
                key={`${course.name}-${filter}-${index}`}
                className={`course-card ${selectedCourse === index ? 'expanded' : ''}`}
                onClick={() => setSelectedCourse(selectedCourse === index ? null : index)}
                style={{ '--course-color': course.color }}
              >
                <div className="course-front">
                  <div className="course-icon-wrapper">
                    <IconComponent className="course-icon" />
                    <div className="course-status-badge">
                      {getStatusIcon(course.status)}
                    </div>
                  </div>
                  <h3 className="course-name">{course.name}</h3>
                  <span className="course-platform">{course.platform}</span>
                  <span className={`course-status ${course.status}`}>
                    {course.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                  <div className="course-glow" />
                </div>
                
                {selectedCourse === index && (
                  <div className="course-back">
                    <div className="course-details">
                      <p className="course-description">
                        {course.status === "completed" 
                          ? "🎉 Successfully completed this course!"
                          : "📚 Currently learning and growing!"}
                      </p>
                      <div className="course-actions">
                        <span className="course-tag">
                          {course.status === "completed" ? "Certified" : "Learning"}
                        </span>
                        <span className="course-tag">📖 {course.platform}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="courses-footer">
          <div className="fun-fact">
            <span className="fact-text">
              {filter === "All" 
                ? `${coursesList.length} courses & certifications` 
                : `${filter === "Completed" ? coursesList.filter(c => c.status === "completed").length : coursesList.filter(c => c.status === "in-progress").length} ${filter.toLowerCase()}`
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;