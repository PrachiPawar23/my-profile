import "./Skills.css";

const skillsList = [
  "Java",
  "JavaFX",
  "ReactJS",
  "HTML",
  "CSS",
  "Git",
  "SQL",
  "Basic Python",
  "Basic C/C++",
  "Basic JavaScript",
  "Basic Android Studio - Java",
  "Android Studio - XML",
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technologies I Know</h2>
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
