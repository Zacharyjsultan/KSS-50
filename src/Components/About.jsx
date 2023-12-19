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
                <img
                  className="about-image"
                  src={process.env.PUBLIC_URL + "/2keely2.jpeg"}
                  alt="Keely"
                />

                <div className="about-paragraph">
                  <p>
                    I'm originally from Rhode Island and have called Oregon home
                    for the past 6 years. Over the last 8 years, I've worked
                    closely with young individuals and teens with developmental
                    disabilities, beginning as a paraeducator in the PPS school
                    system just as the pandemic struck. The shutdown provided an
                    opportunity for me to reflect on my life and future goals.
                    My curiosity about doulas, which began during my women's
                    studies, led me to undertake virtual birth doula training
                    with Jesse Remer at Mother Tree Birth in Portland. Pursuing
                    certification with Dona International, I balanced this with
                    my work in special education, dedicating time to absorb
                    knowledge on birth and family support.
                  </p>
                  <p>
                    After my doula training, I discovered Reiki, thanks to a
                    virtual course named 'Reiki for Birth Workers' hosted by
                    Reiki Master Mitra Sessions from Venice Holistic Energy
                    Healing in England. I was deeply impressed by Reiki's
                    positive impact on my nervous system. Living with CPTSD, I
                    realized it could benefit birthers and their families. I
                    completed Reiki II with Mitra and continued my Reiki III and
                    Reiki Master training a couple of years later with Elizabeth
                    Marshall from Rise Wellness in Portland, Oregon.
                  </p>
                  <p>
                    For the past couple of years, I've volunteered as a birth
                    doula with the Gateway Doula group in Portland, connecting
                    me with numerous clients. This experience has allowed me to
                    learn and grow as a birth worker. I also dedicated a summer
                    to volunteering with the Cascades Abortion Support
                    Collective, where I assisted individuals and families
                    seeking abortion care following Roe v. Wade's overturning.
                    As a birth worker, I'm committed to advocating for
                    reproductive justice.
                  </p>
                  <p>
                    I believe in the importance of continuous self-improvement
                    as it directly impacts the care I provide as a birth doula
                    and Reiki practitioner. While I'm often asked how I entered
                    this field without being a mother or growing up in a
                    household that discussed birth or energy healing, my work as
                    a caregiver and educator has honed my strong advocacy
                    skills. Advocacy and empowerment lie at the core of my work,
                    guiding me in helping others recognize and embrace their
                    inner capacity and innate divinity.
                  </p>
                </div>
              </div>

              <div className="about-right">
                <img className="logo-2" src="/keelylogo.png" alt="Keely Logo" />
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

        <div className="cloud-background">
          <Clouds />
        </div>
      </div>
    </div>
  );
}
