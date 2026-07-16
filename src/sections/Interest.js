import { useState } from "react";
import "./Interest.css";

const Interest = () => {
    const [interests] = useState([
        // Cybersecurity
        "Cybersecurity", "Network Security", "Cloud Security", "Security Consulting",
        "Threat Intelligence", "Threat Detection", "Threat Prevention", "Incident Response", "SOC Operations",
        "Vulnerability Assessment", "Security Automation", "Identity & Access Management",
        "API Security", "Malware Analysis", "Digital Forensics", "AI for Cybersecurity",
        // AI & Software
        "Artificial Intelligence", "Machine Learning", "Agentic AI", "Explainable AI",
        "Neural Networks", "Deep Learning", "Software Engineering", "System Design",
        // Web & Dev
        "Web Development", "Mobile App Development", "Android Development",
        // Cloud & Infra
        "Cloud Computing", "Docker", "Kubernetes", "Linux",
        // Other Tech
        "Internet of Things (IoT)", "Robotics", "Space Exploration",
        // Personal
        "Geography", "Language Learning", "Psychology", "Writing", "Photography",
        "Music", "Art & Drawing", "Sports", "Games", "Military Applications",
    ]);


    return (
        <div>
            <section className="interests">
                <div className="interest-section">
                    <div className="interest-container">
                        <h1 className="interest-title">Interests</h1>
                    </div>
                    <div className="interest-grid">
                        {interests.map((interest, index) => (
                            <div className="interest-item" key={index}>
                                {interest}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Interest;