import { useState } from "react";
import "./Interest.css";

const Interest = () => {
    const [interests] = useState([
        "Cybersecurity", "Web Development", "Software Development",
        "Mobile App Development", "Android Development", "Game Development",
        "Artificial Intelligence", "Machine Learning", "Neural Networks", "Deep Learning",
        "User Interface (UI) Design", "User Experience (UX) Design", "Robotics",
        "Internet of Things (IoT)", "Military Applications", "Space Exploration",
        "Geography", "Psychology", "Language Learning", "Writing", "Photography",
        "Music", "Art & Drawing", "Traveling", "Culture", "Sports", "Games"
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