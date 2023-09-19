import React from "react";
import "./About.css";

import Header from "./Header&Footer/Header";
import Clouds from "./components/Clouds";

export default function About() {
  return (
    <div className="about-background">
      <Header />
      <div className="container">
        <div>
          <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="about-content">
              <div className="about-left">
                {/* Image can be added here */}
                <h1 className="about-name">Image</h1>
                <p className="about-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nec purus feugiat, bibendum quam a, ultrices odio. Praesent
                  bibendum malesuada aliquet.
                </p>
              </div>
              <div className="about-right">
                <div className="trainings-section">
                  <h2 className="trainings-title">
                    Trainings & Certifications
                  </h2>
                  <ul className="training-list">
                    <li className="training-item">Reiki Master</li>
                    <li className="training-item">Dona certified</li>
                    <li className="training-item">TChungus</li>
                    {/* Add more training items as needed */}
                  </ul>
                </div>
                <div className="education-section">
                  <h2 className="education-title">Education</h2>
                  <ul className="education-list">
                    <li className="education-item">
                      Bachelor's in Computer Science
                    </li>
                    <li className="education-item">
                      Master's in Web Development
                    </li>
                    {/* Add more education items as needed */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cloud-background"></div>
        <Clouds />
      </div>
    </div>
  );
}
