import { useEffect } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

import Navbar from "../sections/Navbar"
import Profile from "../sections/Profile";
import Quality from "../sections/Quality";
import Interest from "../sections/Interest";
import Project from "../sections/Project";
import Activity from "../sections/Activity";

import "./Home.css";

const Home = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 0);
            }
        }
    }, []);

    return (
        <div id="home" className="home">
            <div className="sections">
                <Navbar />
                <Profile />
                <div className="element-1" />
                <div className="resume" onClick={() => window.open("/resume.pdf", "_blank")}>
                    <h4><i>Click to here see my Resume</i></h4>
                </div>
                <section className="personality-section">
                    <Quality />
                    <Interest />
                </section>
                <Project />
                {/* <Activity /> */}
                <section id="about">
                    <div className="about-section">
                        <h1 className="about-us">About Us</h1>
                        <div className="about-info">
                            <p>
                                Welcome to <strong>Profile Lander</strong> — a space where creativity meets technology.
                                This platform is crafted with a vision to represent individuality through well-designed,
                                interactive, and modern personal landing pages.
                            </p>
                            <hr className="v-divider" />
                            <p>
                                Initiated by myself, a Computer Science and Technology
                                student at Usha Mittal Institute of Technology (UMIT), Profile Lander reflects
                                a passion for innovation, design, and impactful storytelling. Whether you're a
                                developer, designer, or creative soul, Profile Lander aims to give your digital
                                identity a unique, professional presence.
                            </p>
                            <hr className="v-divider" />
                            <p>
                                Built using <em>ReactJS</em>, styled with modern UI principles, and enriched
                                with animations and thoughtful user experience, this project highlights
                                not just technical skills — but a deep commitment to presenting stories
                                in compelling ways.
                            </p>
                            <hr className="v-divider" />
                            <p>
                                Future updates will bring more templates, dynamic themes, and integrations,
                                making it easier for anyone to build and share their story — beautifully.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="contact-section">
                        <h3 className="contact-title">Contact</h3>
                        <div className="contact-links">
                            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" title="Email">
                                <Mail size={24} />
                            </a>
                            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
}

export default Home;