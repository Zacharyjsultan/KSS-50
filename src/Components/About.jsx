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
                  <p>
                    I was born and raised in Rhode Island. I have been living in
                    Portland, Oregon for about 6 years. For the past 8 years,
                    I've been primarily working one-on-one with young kids and
                    teens with developmental disabilities. I was starting my
                    first year as a paraeducator in the PPS school system when
                    the pandemic hit. The shutdown was an opportunity for me to
                    evaluate my life and future goals. I kept returning to the
                    feeling of excitement and curiosity when I first learned
                    about doulas in my women's studies course many years prior.
                    I did a ton of research and embarked on virtual birth doula
                    training with Jesse Remer at Mother Tree Birth in Portland.
                    As I started on my certification journey with Dona
                    International, while also returning to work in special
                    education, I took my time absorbing anything and everything
                    I could get my hands on concerning birth and how to support
                    families.
                  </p>
                  <p>
                    About a year after my doula training, I learned about Reiki.
                    I found a virtual training called "Reiki for Birth Workers,"
                    hosted by Reiki Master Mitra Sessions from Venice Holistic
                    Energy Healing in England. From that training, I was all in.
                    As someone living with CPTSD, I noticed Reiki making a
                    positive impact on my nervous system and knew if it could do
                    that for me, it could benefit birthers and their families as
                    well. I completed Reiki II with Mitra and continued my Reiki
                    III course and Reiki Master training a couple of years later
                    with Elizabeth Marshall from Rise Wellness in Portland,
                    Oregon.
                  </p>
                  <p>
                    For the past couple of years, I have been volunteering as a
                    birth doula with the Gateway Doula group in Portland, which
                    connected me with several clients. I have been privileged to
                    witness, learn, and grow as a birth worker with these
                    families. I also volunteered for a summer with the Cascades
                    Abortion Support Collective and drove individuals and
                    families coming in from various states to receive abortion
                    care after Roe v. Wade was overturned. As a birth worker, I
                    believe it is my duty to advocate and fight for reproductive
                    justice for all.
                  </p>
                  <p>
                    I know that the quality of care I provide as a birth doula
                    or Reiki practitioner can only be as good as the healing,
                    training, and compassion I give to myself. Therefore, I
                    continue and will always continue to seek ongoing training
                    and healing for myself.
                  </p>
                  <p>
                    People often ask what got me into this line of work, seeing
                    as I am not a mother and did not grow up in a household that
                    discussed birth or energy healing. My work as a caregiver
                    and educator with kids from all different backgrounds and
                    abilities helped me develop strong advocacy skills. At the
                    heart of my work is advocacy and empowerment. Helping others
                    to see and feel their inner capacity and innate divinity is
                    my passion and purpose.
                  </p>
                </p>
                <img className="logo-2" src="/keelylogo.png" alt="Keely Logo" />
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
