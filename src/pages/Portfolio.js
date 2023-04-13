import React from "react";
import awesomeQuiz from "../assets/images/awesomeQuiz.png";
import contactCard from "../assets/images/contactCard.png";
import dayPlanner from "../assets/images/dayPlanner.png";
import loveHungry from "../assets/images/loveHungry.png";
import techBlog from "../assets/images/techBlog.png";
import weatherApp from "../assets/images/weatherApp.png";
import gh from "../assets/images/gh.png";
import { Link } from "react-router-dom";

const Portfolio = ({ projects }) => {
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div key={project.id}>
              <Link
                to={project.deployed}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <section
                  className="actualCard"
                  key={`${project.id}-${project.name}`}
                  style={{
                    backgroundImage: `url(${
                      project.name === "Awesome Quiz"
                        ? awesomeQuiz
                        : project.name === "Contact Card"
                        ? contactCard
                        : project.name === "Day Planner"
                        ? dayPlanner
                        : project.name === "Love Hungry"
                        ? loveHungry
                        : project.name === "The Tech Blog"
                        ? techBlog
                        : weatherApp
                    })`,
                  }}
                >
                  <h2 className="cardText">{project.name}</h2>
                  <Link
                    to={project.ghLink}
                    target="_blank"
                    rel="noreferrer"
                    key={`${project.id}-${project.name}-ghLink`}
                  >
                    <img
                      className="ghIcon"
                      src={gh}
                      alt="GitHub Icon"
                      height="25px"
                      key={`${project.id}-${project.name}-ghIcon`}
                    />
                  </Link>
                </section>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
