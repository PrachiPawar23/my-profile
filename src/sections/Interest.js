import { useState } from "react";
import "./Interest.css";

const Interest = () => {
    const [interests] = useState([
        "Web Development", "Artificial Intelligence", "Machine Learning", "Neural Networks",
        "Deep Learning", "Cybersecurity", "Software Development", "Cloud Computing",
        "Mobile App Development", "Game Development", "Android Development", 
        "User Interface (UI) Design", "User Experience (UX) Design",
        "Robotics", "Internet of Things (IoT)", "Military Applications", 'Space Exploration',
        "Geography", "Psychology", "Language Learning", "Traveling", "Culture",
        "Writing", "Photography", "Music", "Art & Drawing", "Sports"
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