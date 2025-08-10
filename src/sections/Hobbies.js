import React from "react";
import "./Hobbies.css";

const hobbiesList = [
  "Exploring New Things",
  "Learning New Languages",
  "Photography",
  "Traveling",
  "UI Design",
  "Creative Writing",
  "Blog Writing",
  "Drawing",
  "Listening Music",
  "DIY Projects",
];

const Hobbies = () => {
  return (
    <section id="hobbies">
      <div className="hobbies-section">
        <h2>Ocassional Hobbies</h2>
        <ul className="hobbies-list">
          {hobbiesList.map((hobby, index) => (
            <li key={index} className="hobby-item">{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hobbies;
