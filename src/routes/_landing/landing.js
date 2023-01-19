import React from "react";
import "./landing.css";

const Header = () => {
  return (
    <div className="header">
      <div className="blank_flex"></div>

      <div className="heading">
        <h1>BRANDON MCHUGH</h1>
      </div>
      <div className="links">
        <p>Resume</p>
        <p>GitHub</p>
        <p>Social</p>
        <p>Projects</p>
        <p>Contact Me</p>
      </div>
      <div className="blank_flex"></div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="aboutme-container white">Hi! It's'a me! A'Mario!</div>
        <div className="sections-container">
          <div className="blank_flex"></div>
          <div className="column-left border">
            <div className="info-container white">
              <p>Brandon McHugh</p>
              <p>bachelor's degree</p>
              <p>Rockway, New Jersey</p>
              <p>
                <a>Contact</a>
              </p>
            </div>
            <div className="languages-container white">
              <p>JavaScript</p>
              <p>TypeSCript</p>
              <p>React</p>
              <p>React Native</p>
              <p>HTML / CSS</p>
              <p>Node.js</p>
              <p>Git</p>
            </div>
            <div className="tools-container white">
              <p>GitHub</p>
              <p>Visual Studio Code</p>
              <p>Amazon Web Services</p>
              <p>Atlassian Suite</p>
            </div>
            <div className="certificates-container white">
              <p>Front End Development Libraries</p>
              <p>Back End Development and APIs</p>
              <p>Javascript Algorithms and Data Structures</p>
            </div>
          </div>
          <div className="column-right border">
            <div className="workHistory-container white">
              <p>OtherWhy LLC</p>
              <p>Procore Technologies</p>
              <p>Advanced Systems Concepts</p>
            </div>
            <div className="education-container white">Rowan University</div>
          </div>
          <div className="blank_flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
