import React from "react";
import "./Courses.css";

const coursesList = [
  "Cybersecurity",
  "Android Development",
  // "Blockchain Fundamentals",
  "Generative AI",
  // "Data Analytics",
  "Website Development",
  "Google Cloud Skill Boost Labs",
  "Logo Creation & Digital Product Design",
];

const Courses = () => {
  return (
    <section id="courses">
      <div className="courses-section">
        <h2>Courses & Certifications</h2>
        <ul className="courses-list">
          {coursesList.map((course, index) => (
            <li key={index} className="course-item">{course}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Courses;
