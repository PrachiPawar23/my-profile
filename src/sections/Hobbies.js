import React, { useState } from "react";
import { 
  FaRocket, 
  FaLanguage, 
  FaCamera, 
  FaPaintBrush, 
  FaFeatherAlt, 
  FaPencilAlt, 
  FaMusic
} from "react-icons/fa";
import "./Hobbies.css";

const hobbiesList = [
  { 
    name: "Exploring New Things", 
    icon: FaRocket,
    color: "#FF6B6B",
    description: "Curiosity drives me to discover the unknown",
    category: "Adventure"
  },
  { 
    name: "Learning Languages", 
    icon: FaLanguage,
    color: "#4ECDC4",
    description: "Breaking barriers through words",
    category: "Education"
  },
  { 
    name: "Photography", 
    icon: FaCamera,
    color: "#FFE66D",
    description: "Capturing moments that tell stories",
    category: "Art"
  },
  { 
    name: "UI Design", 
    icon: FaPaintBrush,
    color: "#A8E6CF",
    description: "Creating beautiful digital experiences",
    category: "Design"
  },
  { 
    name: "Creative Writing", 
    icon: FaFeatherAlt,
    color: "#FF8B94",
    description: "Painting worlds with words",
    category: "Art"
  },
  { 
    name: "Drawing", 
    icon: FaPencilAlt,
    color: "#B5A6D6",
    description: "Bringing imagination to life",
    category: "Art"
  },
  { 
    name: "Music", 
    icon: FaMusic,
    color: "#88D8B0",
    description: "Rhythms that move my soul",
    category: "Art"
  },
];

const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", ...new Set(hobbiesList.map(h => h.category))];
  
  const filteredHobbies = filter === "All" 
    ? hobbiesList 
    : hobbiesList.filter(h => h.category === filter);

  return (
    <section id="hobbies">
      <div className="hobbies-section">
        {/* Header with old style */}
        <div className="hobbies-header">
          <h2>Things I Love</h2>
          
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid - Masonry Style */}
        <div className="hobbies-masonry">
          {filteredHobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div
                key={index}
                className={`hobby-tile ${selectedHobby === index ? 'expanded' : ''}`}
                onClick={() => setSelectedHobby(selectedHobby === index ? null : index)}
                style={{ '--hobby-color': hobby.color }}
              >
                <div className="tile-front">
                  <div className="tile-icon">
                    <IconComponent />
                  </div>
                  <h3 className="tile-name">{hobby.name}</h3>
                  <span className="tile-category">{hobby.category}</span>
                  <div className="tile-glow" />
                </div>
                
                {selectedHobby === index && (
                  <div className="tile-back">
                    <p className="tile-description">{hobby.description}</p>
                    <div className="tile-actions">
                      <span className="tile-tag">💡 More</span>
                      <span className="tile-tag">❤️ Favorite</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer with count */}
        <div className="hobbies-footer">
          <div className="fun-fact">
            <span className="fact-text">
              {filter === "All" 
                ? `${hobbiesList.length} Interests` 
                : `${hobbiesList.filter(h => h.category === filter).length} ${filter} Interests`
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;