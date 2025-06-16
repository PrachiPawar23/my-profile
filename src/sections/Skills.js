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

const languages = [
  "English B2-C1",
  "Hindi",
  "Marathi",
  "Spanish A2",
  "Introductory German",
  "Introductory Korean",
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div>
        <h2 className="skills-title">Technologies I Know</h2>
        <div className="skills-container">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <hr className="divider"/>
      <div>
        <h2 className="languages-title">Languages I Know</h2>
        <div className="languages-container">
          {languages.map((lan, index) => (
            <div key={index} className="languages-badge">
              {lan}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
