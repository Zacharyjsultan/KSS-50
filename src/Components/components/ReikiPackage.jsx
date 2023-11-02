import React from "react";
import ReikiPackageCard from "./ReikiPackageCard";

const ReikiPackage = () => {
  return (
    <div className="package-container">
      <h2>Reiki Package</h2>
      <p>Background of the Reiki modality goes here.</p>
      <div className="review">
        <h3>Client Review</h3>
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
      <ReikiPackageCard />
    </div>
  );
};

export default ReikiPackage;
