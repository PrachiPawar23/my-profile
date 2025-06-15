import React, { useState } from "react";
import "./Experiences.css";

const experiencesList = [
    {
        role: "Full Stack Developer Intern",
        company: "Alhansat Solutions",
        year: "Sep – Oct 2023",
        description:
            "Collaborated on a Time Zone Converter using Svelte, HTML, JS, and CSS. Developed UI and logic as part of a team.",
        techStack: ["Svelte", "HTML", "CSS", "JavaScript"],
    },
    {
        role: "Front-End Developer",
        company: "GDSC-IEEE UMIT Project",
        year: "Nov 2023",
        description:
            "Built a front-end and basic backend for an E-Commerce site using HTML, CSS, JS & PHP to support local businesses as a part of Hackathon.",
        techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
        role: "Project (React) Developer",
        company: "PM-USHA University Project",
        year: "Jul 2024 – Present",
        description:
            "Creating a project management dashboard using ReactJS, CSS, and Firebase for real-time tracking and reporting.",
        techStack: ["ReactJS", "CSS", "Firebase"],
    },
    {
        role: "UI Designer – Course Project",
        company: "Acmegrade | Android App Development",
        year: "2024",
        description:
            "Designed and structured over 60+ XML layout screens in Android Studio for an HR-Employee Management App as per the given wireframe/UI structure.",
        techStack: ["Android Studio", "Java", "XML"],
    },
    {
        role: "Cybersecurity Intern",
        company: "Acmegrade",
        year: "Oct 2023",
        description:
            "Performed reconnaissance and web app attacks using tools like SQLMap, NMap, Wireshark & Kali Linux on testing environments.",
        techStack: ["Kali Linux", "SQLMap", "Wireshark", "NMap", "Ethical Hacking"],
    },
    {
        role: "Web Development Assistant – Drupal CMS",
        company: "SNDT University Website Revamp",
        year: "June 2025",
        description:
            "Assisted the web development team in updating the UMIT website by feeding structured data, editing pages, and managing media content using Drupal’s CMS interface.",
        techStack: ["Drupal CMS", "Content Editing", "Media Management"],
    },
    {
        role: "Research Author",
        company: "Academic Research - UMIT",
        year: "Apr – May 2023",
        description:
            "Generated a research paper on 'Implementation of AI & Advanced Robotics in Military Applications', highlighting automation trends and tech advancements in defense.",
        techStack: ["AI Research", "Advanced Robotics", "Technical Writing"],
    },
    {
        role: "PR Executive",
        company: "The Writers’ Club UMIT",
        year: "2023 – 2024",
        description:
            "Led PR operations, increased club and event engagement, managed sponsorships, and was a core editorial committee member for annual magazine ‘Aikyam’.",
        techStack: ["Public Relations", "Team Management", "Editorial Work"],
    },
    {
        role: "Creative & Sponsorship Member",
        company: "UMIT Sports Council",
        year: "2022 – 2023",
        description:
            "Planned and executed event ideas while managing sponsorships for college sports events.",
        techStack: ["Event Planning", "Sponsorship", "Team Collaboration"],
    },
    {
        role: "Graphics & Editorial Member",
        company: "The Writers’ Club UMIT",
        year: "2022 – 2023",
        description:
            "Designed promotional materials and contributed visuals and content to the club’s annual publication.",
        techStack: ["Canva", "Figma", "Photography", "Content Writing"],
    },
];



const Experiences = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleExpand = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section id="experience" className="experience-section">
            <h3 className="experience-title">Experience</h3>
            <div className="timeline">
                {experiencesList.map((item, index) => (
                    <div
                        key={index}
                        className="timeline-item"
                        onClick={() => toggleExpand(index)}
                    >
                        <div className="timeline-dot" />
                        <div className="timeline-title">
                            <h4>{item.role}</h4>
                        </div>
                        {activeIndex === index && (
                            <div className="timeline-details">
                                <h5>
                                    {item.company}{" "}
                                    <span className="timeline-year">({item.year})</span>
                                </h5>
                                <p>{item.description}</p>
                                {item.techStack && (
                                    <div className="tech-stack">
                                        {item.techStack.map((tech, i) => (
                                            <span key={i} className="tech-chip">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
