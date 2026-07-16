import React, { useState } from "react";
import { 
  FaAward, 
  FaGraduationCap, 
  FaBriefcase, 
  FaRocket, 
  FaStar, 
  FaMedal,
  FaTrophy,
  FaCertificate,
  FaPalette,
  FaShieldAlt,
  FaFlag,
  FaRunning,
  FaMicrophone,
  FaLightbulb,
  FaHeart,
  FaLeaf,
  FaMusic
} from "react-icons/fa";
import "./Achievements.css";

const achievementsList = [
  {
    title: "B.Tech CGPA – 9.095 / 10",
    year: "2022–2026",
    description: "Graduated with a CGPA of 9.095 in B.Tech Computer Science & Technology from UMIT.",
    icon: FaGraduationCap,
    category: "Academic",
    color: "#FBBF24"
  },
  {
    title: "Deloitte USI – Analyst Offer",
    year: "2025–2026",
    description: "Received an Analyst opportunity at Deloitte USI, with interest in the Cyber Risk and Security Consulting practice.",
    icon: FaBriefcase,
    category: "Career",
    color: "#34D399"
  },
  {
    title: "NetroAegis – Agentic AI Network Defense System",
    year: "2025–2026",
    description: "Designed and developed NetroAegis, a multi-agent AI system for real-time network monitoring, autonomous threat response, and Explainable AI-driven decision-making.",
    icon: FaShieldAlt,
    category: "Project",
    color: "#60A5FA"
  },
  {
    title: "QA Automation Internship — IDfy",
    year: "Feb – Jul 2026",
    description: "Completed a 5-month QA Automation Engineering internship at IDfy. Delivered 56 tasks across 5 sprints: Python/Flask regression framework development, Elasticsearch/Kibana integration, Excel export, Merlin (GenAI) integration, Google Chat notifications, OpenAPI spec migration to Vertex AI, and manual QA across 14+ service releases covering 43+ ML task types.",
    icon: FaRocket,
    category: "Career",
    color: "#F59E0B"
  },
  {
    title: "NASA Space Camp Qualifier",
    year: "2021 & 2022",
    description: "Qualified for Stage 1 twice – once for 'Stars & Stellar Evolution' and once for 'Black Holes'.",
    icon: FaStar,
    category: "Achievement",
    color: "#8B5CF6"
  },
  {
    title: "Best Student of the Year",
    year: "2021–2022",
    description: "Recognized for academic excellence and leadership during the academic year.",
    icon: FaAward,
    category: "Academic",
    color: "#FBBF24"
  },
  {
    title: "Award of Excellence",
    year: "2020–2022",
    description: "Honored for consistent academic and co-curricular achievements.",
    icon: FaMedal,
    category: "Academic",
    color: "#FBBF24"
  },
  {
    title: "Certificate of Merit – F.Y. B.Tech.",
    year: "2022",
    description: "Performed excellenty in Induction Program in the first year of B.Tech.",
    icon: FaCertificate,
    category: "Academic",
    color: "#34D399"
  },
  {
    title: "'A' Certificate – NCC Naval Wing",
    year: "2019",
    description: "Successfully completed the NCC Naval Wing training with 'A' certification.",
    icon: FaFlag,
    category: "Achievement",
    color: "#60A5FA"
  },
  {
    title: "Tug-of-War Champion",
    year: "2024 & 2025",
    description: "1st position in intra-college Tug-of-War competitions for two consecutive years.",
    icon: FaRunning,
    category: "Sports",
    color: "#EC4899"
  },
  {
    title: "Box Cricket Winner",
    year: "2024",
    description: "1st position in the college Box Cricket tournament.",
    icon: FaTrophy,
    category: "Sports",
    color: "#F59E0B"
  },
  {
    title: "Poem Competition",
    year: "2023",
    description: "Secured 2nd position for a poem expressed for brave Indian Soldiers.",
    icon: FaMicrophone,
    category: "Creative",
    color: "#8B5CF6"
  },
  {
    title: "Exhibition: Electricity Generation through Soil",
    year: "2021–2022",
    description: "Won 3rd position for an innovative project in the college science exhibition.",
    icon: FaLightbulb,
    category: "Project",
    color: "#FBBF24"
  },
  {
    title: "Silver Medal in Moral Education",
    year: "2017-2018",
    description: "Awarded by Sanskruti Samvardhan Pratishthan for excellence in Moral Education.",
    icon: FaHeart,
    category: "Achievement",
    color: "#EC4899"
  },
  {
    title: "Inter-School Street Play Winner",
    year: "2019",
    description: "1st position in the inter-school street play competition.",
    icon: FaMusic,
    category: "Creative",
    color: "#8B5CF6"
  },
  {
    title: "Flower Arrangement Champion",
    year: "2020",
    description: "1st position in inter-school flower arrangement competition.",
    icon: FaLeaf,
    category: "Creative",
    color: "#34D399"
  },
  {
    title: "NCC Tug-of-War – 2nd Position",
    year: "2018",
    description: "Represented NCC and secured 2nd place in Tug-of-War at inter-school level.",
    icon: FaRunning,
    category: "Sports",
    color: "#EC4899"
  },
  {
    title: "Elementary & Intermediate Drawing Certificates",
    year: "2016 & 2017",
    description: "Certified by Govt. of Maharashtra for completing both levels in Drawing.",
    icon: FaPalette,
    category: "Creative",
    color: "#60A5FA"
  },
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(achievementsList.map(a => a.category))];
  
  const filteredAchievements = filter === "All" 
    ? achievementsList 
    : achievementsList.filter(a => a.category === filter);

  // Calculate stats
  const totalAchievements = achievementsList.length;
  const academicCount = achievementsList.filter(a => a.category === "Academic").length;
  const careerCount = achievementsList.filter(a => a.category === "Career").length;
  const sportsCount = achievementsList.filter(a => a.category === "Sports").length;
  const creativeCount = achievementsList.filter(a => a.category === "Creative").length;

  return (
    <section id="achievements" className="achievements-section">
      {/* Header */}
      <div className="achievements-header">
        <h3 className="achievements-title">
          Achievements & Milestones
        </h3>
        
        <div className="achievements-controls">
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
      </div>

      {/* Stats Bar */}
      <div className="achievements-stats">
        <span className="stat-item">
          <FaTrophy /> {totalAchievements} Total
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <FaGraduationCap /> {academicCount} Academic
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <FaBriefcase /> {careerCount} Career
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <FaRunning /> {sportsCount} Sports
        </span>
        <span className="stat-divider">•</span>
        <span className="stat-item">
          <FaPalette /> {creativeCount} Creative
        </span>
      </div>

      {/* Achievements Grid */}
      <div className="achievements-container">
        {filteredAchievements.map((item, index) => {
          const IconComponent = item.icon;
          const isExpanded = selectedAchievement === index;
          
          return (
            <div
              key={`${item.title}-${filter}-${index}`}
              className={`achievement-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setSelectedAchievement(isExpanded ? null : index)}
              style={{ '--achievement-color': item.color }}
            >
              <div className="achievement-card-inner">
                <div className="achievement-icon-wrapper">
                  <IconComponent className="achievement-icon" style={{ color: item.color }} />
                  <span className="achievement-category">{item.category}</span>
                </div>
                
                <div className="achievement-content">
                  <h4 className="achievement-title">{item.title}</h4>
                  <span className="achievement-year">{item.year}</span>
                  
                  <p className={`achievement-description ${isExpanded ? 'show' : ''}`}>
                    {item.description}
                  </p>
                  
                  {!isExpanded && (
                    <span className="expand-hint">Click to read more</span>
                  )}
                </div>
                
                <div className="achievement-glow" />
                <div className="achievement-shine" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="achievements-footer">
        <div className="fun-fact">
          <span className="fact-text">
            {filter === "All" 
              ? `Showing all ${totalAchievements} achievements` 
              : `${filteredAchievements.length} ${filter} achievements`
            }
          </span>
        </div>
      </div>
    </section>
  );
};

export default Achievements;