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
                                Welcome to <strong>My Profile Lander</strong> — a space where creativity meets technology.
                                This platform is designed to represent individuality through well-crafted,
                                interactive, and modern personal landing pages.
                            </p>
                            <hr className="divider" />
                            <p>
                                I'm a Computer Science and Technology student at Usha Mittal Institute of Technology (UMIT),
                                and I created Profile Lander to reflect my passion for innovation, design, and impactful storytelling.
                                Whether you're a developer, designer, or creative mind, this project aims to give your digital
                                identity a unique and professional presence.
                            </p>
                            <hr className="divider" />
                            <p>
                                Built using <em>ReactJS</em>, styled with modern UI principles, and enriched with animations and
                                thoughtful user experience, this project showcases not only technical skills but also a strong
                                commitment to meaningful design.
                            </p>
                            <hr className="divider" />
                            <p>
                                This page isn’t just a showcase — it’s a canvas of my journey, skills, and aspirations.
                                Designed and developed by me, it brings together the things I value most: clarity, creativity, and connection.
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
                                <FaPinterestP size={24} /> {/* You'll need to import a Pinterest icon, or use a custom SVG/text */}
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
        </div >
    );
}

export default Home;