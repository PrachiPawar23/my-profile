import { useEffect } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { FaPinterestP, FaMediumM } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";

import Navbar from "../sections/Navbar"
import Profile from "../sections/Profile";
import Skills from "../sections/Skills";
import Quality from "../sections/Quality";
import Interest from "../sections/Interest";
import Project from "../sections/Project";
import Experiences from "../sections/Experiences";
import Hobbies from "../sections/Hobbies";
import Courses from "../sections/Courses";
import Achievements from "../sections/Achievements";
// import Activity from "../sections/Activity";

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
                <div className="resume" onClick={() => window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank")}>
                    <h4><i>Click to here see my Resume</i></h4>
                </div>
                <Skills />
                <section className="personality-section">
                    <Quality />
                    <Interest />
                </section>
                <Project />
                <Experiences />
                <section className="additional-section">
                    <Hobbies />
                    <Courses />
                </section>
                {/* <Activity /> */}
                <Achievements />
                <section id="about">
                    <div className="about-section">
                        <h1 className="about-us">About Me</h1>
                        <div className="about-info">
                            <p>
                                I'm <strong>Prachi Minal Pawar</strong>, a B.Tech Computer Science &amp; Technology
                                graduate from Usha Mittal Institute of Technology (UMIT), with a CGPA of 9.095.
                                Currently an Incoming Analyst at Deloitte USI, and a QA Automation Engineer with
                                ~6 months of industry experience.
                            </p>
                            <hr className="divider" />
                            <p>
                                My work spans Cypress automation, Python scripting, REST API testing, Flask-based
                                internal tooling, and full-stack web development. My featured project,{" "}
                                <em>NetroAegis</em>, is a multi-agent AI network defense system built around
                                Explainable AI and autonomous threat response.
                            </p>
                            <hr className="divider" />
                            <p>
                                My long-term goal is Cybersecurity Engineering — specializing in Security Consulting,
                                Threat Detection, Security Automation, and AI-powered Security Systems. I'm building
                                expertise in Linux, cloud computing, networking, and cryptography, and plan to pursue
                                a Master's in Cybersecurity through an international scholarship.
                            </p>
                            <hr className="divider" />
                            <p>
                                Beyond tech: I've memorized every sovereign country, capital, and national flag in
                                the world, and I'm learning Korean and Spanish. Disciplined curiosity — inside the
                                codebase and out.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="contact-section">
                        <h3 className="contact-title">Social Media</h3>
                        <div className="contact-links">
                            <a href="mailto:prachipawar2705@gmail.com" target="_blank" rel="noopener noreferrer" title="Email: prachipawar2705@gmail.com">
                                <Mail size={24} />
                            </a>
                            <a href="https://github.com/PrachiPawar23" target="_blank" rel="noopener noreferrer" title="GitHub: https://github.com/PrachiPawar23">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/prachi-minal-pawar" target="_blank" rel="noopener noreferrer" title="LinkedIn: https://www.linkedin.com/in/prachi-minal-pawar">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://www.instagram.com/the.quietexplorer" target="_blank" rel="noopener noreferrer" title="Instagram: https://www.instagram.com/the.quietexplorer">
                                <Instagram size={24} />
                            </a>
                            <a href="https://in.pinterest.com/prachipawar23" target="_blank" rel="noopener noreferrer" title="Pinterest: https://in.pinterest.com/prachipawar23">
                                <FaPinterestP size={24} />
                            </a>
                            <a href="https://medium.com/@prachi_pawar0823" target="_blank" rel="noopener noreferrer" title="Medium: https://medium.com/@prachi_pawar0823">
                                <FaMediumM size={24} />
                            </a>
                            <a href="https://www.duolingo.com/profile/PrachiPawar23" target="_blank" rel="noopener noreferrer" title="Duolingo: https://www.duolingo.com/profile/PrachiPawar23">
                                <SiDuolingo size={24} />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
