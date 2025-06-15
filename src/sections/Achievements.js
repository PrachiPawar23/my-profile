import React from "react";
import "./Achievements.css";

const achievementsList = [
  {
    title: "NASA Space Camp Qualifier",
    year: "2021 & 2022",
    description: "Qualified for Stage 1 twice – once for 'Stars & Stellar Evolution' and once for 'Black Holes'.",
  },
  {
    title: "Best Student of the Year",
    year: "2021–2022",
    description: "Recognized for academic excellence and leadership during the academic year.",
  },
  {
    title: "Award of Excellence",
    year: "2020–2022",
    description: "Honored for consistent academic and co-curricular achievements.",
  },
  {
    title: "Certificate of Merit – F.Y. B.Tech.",
    year: "2022",
    description: "Performed excellenty in Induction Program in the first year of B.Tech.",
  },
  {
    title: "‘A’ Certificate – NCC Naval Wing",
    year: "2019",
    description: "Successfully completed the NCC Naval Wing training with ‘A’ certification.",
  },
  {
    title: "Tug-of-War Champion",
    year: "2024 & 2025",
    description: "1st position in intra-college Tug-of-War competitions for two consecutive years.",
  },
  {
    title: "Box Cricket Winner",
    year: "2024",
    description: "1st position in the college Box Cricket tournament.",
  },
  {
    title: "Poem Competition",
    year: "2023",
    description: "Secured 2nd position for a poem expressed for brave Indian Soldiers.",
  },
  {
    title: "Exhibition: Electricity Generation through Soil",
    year: "2021–2022",
    description: "Won 3rd position for an innovative project in the college science exhibition.",
  },
  {
    title: "Silver Medal in Moral Education",
    year: "2017-2018",
    description: "Awarded by Sanskruti Samvardhan Pratishthan for excellence in Moral Education.",
  },
  {
    title: "Inter-School Street Play Winner",
    year: "2019",
    description: "1st position in the inter-school street play competition.",
  },
  {
    title: "Flower Arrangement Champion",
    year: "2020",
    description: "1st position in inter-school flower arrangement competition.",
  },
  {
    title: "NCC Tug-of-War – 2nd Position",
    year: "2018",
    description: "Represented NCC and secured 2nd place in Tug-of-War at inter-school level.",
  },
  {
    title: "Elementary & Intermediate Drawing Certificates",
    year: "2016 & 2017",
    description: "Certified by Govt. of Maharashtra for completing both levels in Drawing.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h3 className="achievements-title">Achievements</h3>
      <div className="achievements-container">
        {achievementsList.map((item, index) => (
          <div key={index} className="achievement-card">
            <h4>{item.title} <span className="achievement-year">({item.year})</span></h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
