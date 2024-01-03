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
                    I’m originally from Rhode Island but have called Oregon home
                    for the past 7 years. Over the last 9 years, I've been
                    primarily working one-on-one with young kids and teens with
                    developmental disabilities. I was starting my first year as
                    a paraeducator when the pandemic hit. The shutdown was an
                    opportunity for me to evaluate my life and future goals. My
                    curiosity about doulas, which began during my women’s
                    studies many years prior, led me to enroll in a virtual
                    birth doula training with Jesse Remer at Mother Tree Birth
                    in Portland. I pursued birth doula certification with Dona
                    International, while balancing my work in special education.
                    I dedicated my time absorbing knowledge about birth and
                    family support.
                  </p>
                  <p>
                    About a year after my doula training, I learned about the
                    Japanese energy healing practice of Reiki. I found a virtual
                    training called "Reiki for Birth Workers," hosted by Reiki
                    Master Mitra Sessions from Venice Holistic Energy Healing in
                    England. As someone living with CPTSD, I noticed Reiki
                    making a positive impact on my nervous system. Reiki allowed
                    me to really be with myself and get in touch with my deeper
                    intuition. I knew if my Reiki practice could do that for me,
                    it could benefit birthers during the perinatal period. I
                    completed Reiki II with Mitra and continued my Reiki III
                    course and Reiki Master training a couple years later with
                    Elizabeth Marshall from Reiki Uprising in Portland, Oregon.
                  </p>
                  <p>
                    For the past couple of years, I have been volunteering as a
                    birth doula with the Gateway Doula group in Portland, which
                    connected me with several clients. I have been privileged to
                    learn and grow as a birth worker with these families. I also
                    volunteered with the Cascades Abortion Support Collective
                    where I assisted those seeking abortion care after Roe v.
                    Wade was overturned. As a birth worker, I’m committed to
                    advocating for reproductive justice.
                  </p>
                  <p>
                    I believe in the importance of continuous self-improvement
                    and healing as it directly impacts the care I provide as a
                    doula and Reiki practitioner. I seek ongoing personal and
                    collective healing through various somatic and mindfulness
                    based practices, Chinese medicine, energy healing and
                    Internal Family Systems therapy.
                  </p>
                  <p>
                    I am often asked how I ended up in birth and energy work. My
                    time as a caregiver and educator with kids and families
                    throughout the years, led me to this field. Advocacy and
                    empowerment lie at the heart of my work. Helping others
                    recognize and embrace their inner capacity and deeper wisdom
                    is my passion and purpose.
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
