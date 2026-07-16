import React, { useState } from "react";
import "./Experiences.css";

const experiencesList = [
    {
        role: "Incoming Analyst",
        company: "Deloitte USI",
        year: "Joining Soon",
        description:
            "Received an Analyst offer at Deloitte USI. Interested in joining the Cyber Risk, Security Consulting, or Security Operations practice — focusing on cloud security, identity & access management, security automation, and SOC operations.",
        category: "Professional",
        color: "#a78bfa",
    },
    {
        role: "Automation + Manual QA Engineer",
        company: "IDfy",
        year: "Jan 2026 – Jul 2026",
        description:
            "Worked as part of the EVE Automation team at IDfy — an identity verification platform. Delivered 56 tasks across automation development, feature implementation, bug fixes, and sprint planning over 5 sprints (Feb–Jul 2026). Built and extended a Python/Flask-based regression testing framework used for bulk ML service validation. Contributed to Excel/spreadsheet export, Elasticsearch/Kibana integration, Google Chat notifications, Merlin (GenAI schema editor) integration into Devtools, and OpenAPI spec generation migrated to Vertex AI. Also performed manual QA and functional/regression/load testing across 14+ service releases covering 43 ML task types and 36 Verifyre services.",
        techStack: [
            "Python", "Flask", "Elasticsearch", "Kibana",
            "Pandas/Excel Export", "Google Cloud Storage (GCS)", "Google Kubernetes Engine (GKE)/Workloads", "Vertex AI (Gemini)",
            "REST API Testing", "Postman", "Regression Testing", "Functional Testing",
            "Load Testing", "Manual QA", "Jmeter", "Agile / Sprint Planning",
            "K8s Automation", "YAML", "React.js", "Debugging", "Bug Reporting",
        ],
        category: "Professional",
        color: "#34d399",
    },
    {
        role: "NetroAegis Research Author",
        company: "Academic Project - UMIT",
        year: "2026",
        description:
            "Authored the research paper 'NETROAEGIS: AN AGENTIC AI-DRIVEN FRAMEWORK FOR INTELLIGENT WIRELESS INTRUSION DETECTION AND AUTONOMOUS CYBER DEFENSE' proposing a multi-agent AI framework for intelligent network monitoring, intent inference, risk assessment, autonomous defense selection, and explainable cybersecurity decision-making.",
        techStack: [
            "Cybersecurity", "Agentic AI", "Network Security", "Explainable AI (XAI)", "Python", "Flask", "React", "Research"
        ],
        category: "Research",
        color: "#f472b6",
    },
    {
        role: "Web Development Assistant – Drupal CMS",
        company: "SNDT University Website Revamp",
        year: "June 2025",
        description:
            "Assisted the web development team in updating the UMIT website by feeding structured data, editing pages, and managing media content using Drupal's CMS interface.",
        techStack: ["Drupal CMS", "Content Editing", "Media Management"],
        category: "Development",
        color: "#10b981",
    },
    {
        role: "Project Developer",
        company: "PM-USHA University Project",
        year: "Jul 2024 – 2025",
        description:
            "Creating a project management dashboard using ReactJS, CSS, and Firebase for real-time tracking and reporting.",
        techStack: ["ReactJS", "CSS", "Firebase"],
        category: "Development",
        color: "#06b6d4",
    },
    {
        role: "Full Stack Developer Intern & Team Leader",
        company: "Alhansat Solutions",
        year: "Sep – Oct 2023",
        description:
            "Collaborated on a Time Zone Converter using Svelte, HTML, JS, and CSS. Developed UI and logic as part of a team.",
        techStack: ["Svelte", "HTML", "CSS", "JavaScript"],
        category: "Development",
        color: "#60a5fa",
    },
    {
        role: "Front-End Developer",
        company: "GDSC-IEEE UMIT Project",
        year: "Nov 2023",
        description:
            "Built a front-end and basic backend for an E-Commerce site using HTML, CSS, JS & PHP to support local businesses as a part of Hackathon.",
        techStack: ["HTML", "CSS", "JavaScript", "PHP"],
        category: "Development",
        color: "#f59e0b",
    },
    {
        role: "UI Designer – Course Project",
        company: "Acmegrade | Android App Development",
        year: "2024",
        description:
            "Designed and structured over 60+ XML layout screens in Android Studio for an HR-Employee Management App as per the given wireframe/UI structure.",
        techStack: ["Android Studio", "Java", "XML"],
        category: "Design",
        color: "#8b5cf6",
    },
    {
        role: "Cybersecurity Intern – Course",
        company: "Acmegrade",
        year: "Oct 2023",
        description:
            "Performed reconnaissance and web app attacks using tools like SQLMap, NMap, Wireshark & Kali Linux on testing environments.",
        techStack: ["Kali Linux", "SQLMap", "Wireshark", "NMap", "Ethical Hacking"],
        category: "Cybersecurity",
        color: "#ef4444",
    },
    {
        role: "Research Author",
        company: "Academic Research - UMIT",
        year: "Apr – May 2023",
        description:
            "Generated a research paper on 'Implementation of AI & Advanced Robotics in Military Applications', highlighting automation trends and tech advancements in defense.",
        techStack: ["AI Research", "Advanced Robotics", "Technical Writing"],
        category: "Research",
        color: "#ec4899",
    },
    {
        role: "PR Executive",
        company: "The Writers' Club UMIT",
        year: "2023 – 2024",
        description:
            "Led PR operations, increased club and event engagement, managed sponsorships, and was a core editorial committee member for annual magazine 'Aikyam'.",
        techStack: ["Public Relations", "Team Management", "Editorial Work"],
        category: "Leadership",
        color: "#f97316",
    },
    {
        role: "Creative & Sponsorship Member",
        company: "UMIT Sports Council",
        year: "2022 – 2023",
        description:
            "Planned and executed event ideas while managing sponsorships for college sports events.",
        techStack: ["Event Planning", "Sponsorship", "Team Collaboration"],
        category: "Leadership",
        color: "#14b8a6",
    },
    {
        role: "Graphics & Editorial Member",
        company: "The Writers' Club UMIT",
        year: "2022 – 2023",
        description:
            "Designed promotional materials and contributed visuals and content to the club's annual publication.",
        techStack: ["Canva", "Figma", "Photography", "Content Writing"],
        category: "Design",
        color: "#a855f7",
    },
];

const Experiences = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(experiencesList.map(item => item.category))];

    const filteredExperiences = selectedCategory === "All" 
        ? experiencesList 
        : experiencesList.filter(item => item.category === selectedCategory);

    const toggleExpand = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section id="experiences" className="experience-section">
            <div className="experience-header">
                <h3 className="experience-title">Experience</h3>
                <div className="filter-container">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="cluster-grid">
                {filteredExperiences.map((item, index) => {
                    const globalIndex = experiencesList.indexOf(item);
                    const size = item.techStack && item.techStack.length > 10 ? 'large' : 
                                item.techStack && item.techStack.length > 5 ? 'medium' : 'small';
                    
                    return (
                        <div
                            key={globalIndex}
                            className={`cluster-item ${size} ${activeIndex === globalIndex ? 'expanded' : ''}`}
                            onClick={() => toggleExpand(globalIndex)}
                            style={{
                                '--item-color': item.color,
                            }}
                        >
                            <div className="cluster-item-header">
                                <div className="cluster-item-dot" style={{ background: item.color }} />
                                <span className="cluster-category">{item.category}</span>
                                <span className="cluster-year">{item.year}</span>
                            </div>
                            
                            <div className="cluster-item-content">
                                <h4>{item.role}</h4>
                                <p className="cluster-company">{item.company}</p>
                            </div>

                            {activeIndex === globalIndex && (
                                <div className="cluster-item-details">
                                    <p className="cluster-description">{item.description}</p>
                                    {item.techStack && (
                                        <div className="tech-stack">
                                            {item.techStack.map((tech, i) => (
                                                <span key={i} className="tech-chip">{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="cluster-expand-hint">
                                {activeIndex === globalIndex ? 'Click to collapse' : 'Click to expand'}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="cluster-stats">
                <span>{filteredExperiences.length} experiences</span>
                <span>•</span>
                <span>{categories.length - 1} categories</span>
            </div>
        </section>
    );
};

export default Experiences;