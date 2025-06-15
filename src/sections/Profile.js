import { Typewriter } from 'react-simple-typewriter';
import profileImg from "../images/profile-img2.png";
import "./Profile.css";

const Profile = () => {
    return (
        <div>
            <section id="profile">
                <div className="about-me">
                    <div className="profile-info">
                        <h3 className="profile-name">Hello! I’m Prachi Minal Pawar</h3>
                        <Typewriter
                            words={[
                                "A pre-final year Computer Science and Technology student at Usha Mittal Institute of Technology (UMIT), currently holding an average CGPA of 9.05. I’m deeply passionate about innovation, problem-solving, and building meaningful solutions that blend creativity with technology.",
                                "My journey spans across diverse domains — from web and Android development to cybersecurity and the evolving world of generative AI. I’m proficient in technologies like HTML, CSS, JavaScript, ReactJS, Java, and Node.js, and I enjoy complementing my technical work with clean, thoughtful design using tools like Figma and Canva.",
                                "I’m equally driven by curiosity — from exploring robotics, cloud computing, and space research, to expressing myself through art, photography, and creative writing. With a strong foundation, a growth mindset, and a love for learning, I strive to embrace new challenges and create solutions that leave a lasting impact."
                            ]}
                            typeSpeed={30}
                            deleteSpeed={-1}
                            delaySpeed={1000}
                            loop={false}
                            cursor
                        />
                    </div>
                    <div className="profile-image">
                        <img src={profileImg} alt="My Profile" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;