import React from "react";
import ReikiPackageCard from "./ReikiPackageCard";

const ReikiPackage = () => {
  return (
    <div className="package-container">
      <h2>Reiki Package</h2>
      <p>
        I am trained in the Usui Shiki Ryoho method of Reiki. This is the
        traditional Japanese, hands on energy healing practice formalized by
        Japan in the 1900s by Mikao Usui. Rei Ki means universal life force
        energy. It is the equivalent to Prana in Sanskrit and Qi or Chi in
        Chinese Medicine. It is the energy that makes up who we are and connects
        all living things. The practice of Reiki is a gentle, hands-on technique
        that can remove energetic blocks or stuck energy, and can restore
        balanced energy in the body which helps with overall healing and
        wellness. People seek Reiki when they feel misaligned or stuck in some
        way, whether that be physically, mentally or emotionally. Everything we
        do in life makes an imprint on us and our bodies store that energy. It's
        my job to locate that stuck energy and intend Reiki. All healing is self
        healing, therefore I am a vessel for the energy to flow but your
        intention and willingness to receive does the healing.{" "}
      </p>
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
