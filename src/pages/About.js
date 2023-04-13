import React from "react";
import portrait from "../assets/images/portrait.png";

const About = () => {
  return (
    <div id="about">
      <img id="portrait" src={portrait} alt="portrait of Philip Neumann" />
      <h1>About Me</h1>
      <p>
        Hello there! My name is Philip, and I'm a highly curious and
        culturally-minded individual who has had the privilege of living all
        over the world and experiencing many different cultures. My passion for
        the arts and culture has led me to become a filmmaker. However, I'm also
        eager to expand my horizons and explore new fields, which is why I've
        been learning to code and am excited to enter the job market in tech.
        Throughout my experiences, I've developed a keen eye for detail, a
        strong sense of creativity, and an ability to think outside the box.{" "}
        <br></br>
        <br></br>I believe that these qualities, combined with my multi-faceted
        background and expertise, make me an ideal candidate for any company
        looking for someone with a fresh perspective and a diverse skill set.
        Overall, I'm an upbeat and motivated individual who is always eager to
        take on new challenges and contribute to a team's success. I'm confident
        that I can bring a unique perspective and valuable skills to any
        organization, and I look forward to the opportunity to demonstrate my
        abilities.
      </p>
    </div>
  );
};

export default About;
