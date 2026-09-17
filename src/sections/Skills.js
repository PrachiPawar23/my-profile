import "./Skills.css";


const skillsList = [
  // Programming Languages
  "Python",
  "Java",
  "C/C++",
  "JavaScript",
  "XML",
  "YAML",
  "SQL",
  // Web & Frameworks
  "ReactJS",
  "Flask",
  "Angular",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaFX",
  "Drupal CMS",
  // QA & Testing
  "Cypress",
  "Postman",
  "REST API Testing",
  "API Automation",
  "Sanity Testing",
  "Regression Testing",
  "Functional Testing",
  "Load Testing",
  "Manual Testing",
  // Data & Infra
  "Elasticsearch",
  "Kibana",
  "Google Cloud Storage (GCS)",
  "Google Kubernetes Engine (GKE)",
  "Vertex AI / Gemini",
  "OpenAPI",
  "RabbitMQ",
  // Mobile & Other Dev
  "Android Studio - Java",
  "Android Studio - XML",
  "Firebase",
  // Security & Networking
  "Linux",
  "Shell Scripting",
  "Wireshark",
  "Nmap",
  "VMWare",
  // Tools
  "Git",
  "GitHub",
  "Figma",
  "Canva",
  "Adobe",
];

const languages = [
  "English: B2-C1",
  "Hindi: Proficient",
  "Marathi: Native",
  "Korean: (Learning)",
  "Spanish: A2 (Learning)",
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
