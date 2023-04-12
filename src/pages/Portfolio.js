import React from "react";
import logo from "../assets/images/logo.png";

const Portfolio = ({ projects }) => {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => {
          return (
            <section className="project-card" key={project.id}>
              <h2>{project.name}</h2>
              <img src={logo} alt={project.name} height="50px" />
              <p>{project.description}</p>
              <a href={project.deployed}>Deployed</a>
              <a href={project.github}>GitHub</a>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
