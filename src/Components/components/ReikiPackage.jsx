import React from "react";
import ReikiPackageCard from "./ReikiPackageCard";
import { Link } from "react-router-dom";

const ReikiPackage = () => {
  return (
    <div className="package-container">
      <h2>Reiki Package</h2>
      <ReikiPackageCard />
      <p>
        I am trained in the Usui Shiki Ryoho method of Reiki. This is the
        traditional Japanese, hands on energy healing practice formalized by
        Japan in the 1900s by Mikao Usui. Rei Ki means universal life force
        energy. It is the equivalent to Prana in Sanskrit and Qi or Chi in
        Chinese Medicine. It is the energy that makes up who we are and connects
        all living things.
      </p>
      <p>
        The practice of Reiki involves channeling life force energy to remove
        energetic blocks or stuck energy in the recipient, and restores balanced
        energy for overall health and wellness. Energy imbalances can affect
        one’s physical, emotional and mental health. Therefore, one can seek
        treatment for any kind of ailment or trauma.
      </p>
      <hr />
      <h3>What to expect</h3>
      <p>
        When receiving Reiki, people report feeling a floating sensation,
        tingling, heat or lightness. Most often people experience overall
        relaxation and ease from the treatment. Other effects may be an increase
        in energy or fatigue. Sometimes one can experience an emotional release.
        It is important to note energy healing varies from person to person.
      </p>
      <p>
        Reiki is not a supplement for other medical or therapeutic treatments.
        Reiki should be utilized as a complementary therapy.
      </p>
      <hr />
      <div className="review">
        <h3>Reiki Reviews</h3>
        <p>
          Before speaking with Keely, I was reticent about Reiki. I have anxiety
          and ADHD and it is very difficult for me to just relax. I had
          practiced yoga, meditation, and many other forms of mindfulness to no
          avail - so why would Reiki be any different? But from the start, Keely
          made me feel so comfortable with the entire process and helped me get
          into a headspace where I could actually experience the calming
          benefits. For the first time in my life, I was able to truly be
          mindful - and it is because of Keely's expertise in her practice as
          well as her comforting and positive presence. I've also experienced
          physical health issues recently that have made it very important for
          me to establish a stronger and more accurate mind/body connection.
          Knowing this need, Keely has been able to focus our sessions around
          that connection. I am healing both physically and emotionally from the
          trauma of my injuries, and no small part of that is the work that
          Keely has been doing with me. I cannot recommend her and her services
          enough. - Michaela
        </p>
        <p>
          Keely has a gentle and intuitive approach to this energy work. Her
          feedback has helped me feel more grounded and more certain in what my
          body needs. -Kelly
        </p>
      </div>

      <div className="social-links">
        <h4 className="calendly-scheduler"> Schedule here</h4>
        <div class="arrow"></div>
        <Link to="https://calendly.com/keelyshea/reiki-session-1-hour">
          <img src="/Calendly.png" alt="Logo" width="180" height="130" />
        </Link>
      </div>
    </div>
  );
};

export default ReikiPackage;
