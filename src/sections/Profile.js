import { Typewriter } from 'react-simple-typewriter';
import profileImg from "../images/profile-img2.png";
import "./Profile.css";

const Profile = () => {
    return (
        <div>
            <section id="profile">
                <div className="about-me">
                    <div className="profile-info">
                        <div className="profile-eyebrow">Computer Science & Technology · CGPA 9.095</div>
                        <h3 className="profile-name">Prachi Minal Pawar</h3>
                        <div className="profile-typewriter">
                            <Typewriter
                                words={[
                                    "B.Tech Computer Science & Technology graduate from Usha Mittal Institute of Technology (UMIT), with a CGPA of 9.095. Ex-QA Automation Engineer at IDfy — an identity verification platform — where I worked across 5 sprints delivering 56 tasks in regression automation, framework development, and manual QA. Incoming Analyst at Deloitte USI.",
                                    "At IDfy, I built and extended a Python/Flask testing framework with various tools, integrated Elasticsearch and Kibana for metric extraction, delivered Excel/spreadsheet exports, implemented Google Chat notifications, contributed to Merlin (GenAI) integration in Devtools (Testing Framework), and helped migrate OpenAPI spec generation to Vertex AI. I also performed manual QA across 14+ API service releases and 43+ ML & Verification APIs.",
                                    "My long-term goal is Cybersecurity Engineering — specialising in Security Consulting, Threat Detection, Security Automation, and AI-powered Security Systems. I'm actively building expertise in cloud computing, networking, Linux, and cryptography."
                                ]}
                                typeSpeed={20}
                                deleteSpeed={-1}
                                delaySpeed={1500}
                                loop={false}
                                cursor
                                cursorStyle="|"
                            />
                        </div>
                    </div>
                    <div className="profile-image">
                        <img src={profileImg} alt="Prachi Minal Pawar" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;