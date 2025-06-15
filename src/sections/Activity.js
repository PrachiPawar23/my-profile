import quotes from "../images/quotes.png";
import art from "../images/art.png";
import writing from "../images/writing.png";
import "./Activity.css";

const Activity = () => {
    return (
        <div>
            <section id="activities">
                <div className="activity-section">
                    <div className="activity-tabs">
                        <ul>
                            <li className="active">All</li>
                            <li>Art & Drawing</li>
                            <li>Quotes</li>
                            <li>Blogs</li>
                            <li>Creative Writing</li>
                        </ul>
                    </div>
                    <div className="activity-title">
                        <h3>Activities</h3>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={quotes} alt="Quotes" />
                                <span>Quotes</span>
                            </li>
                            <li>
                                <img src={art} alt="Art" />
                                <span>Art</span>
                            </li>
                            <li>
                                <img src={writing} alt="Creative Writing" />
                                <span>Creative Writing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Activity;