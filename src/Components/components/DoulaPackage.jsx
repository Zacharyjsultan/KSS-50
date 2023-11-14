import React from "react";
import DoulaPackageCard from "./DoulaPackageCard";

const DoulaPackage = () => {
  return (
    <div className="package-container">
      <h2>Doula Package</h2>
      <p>
        A birth doula is a trained professional that provides continuous
        emotional, physical and informational support during the perinatal
        period. As your doula I work for you and your partner, supporting
        whatever you decide for your birth experience.{" "}
      </p>
      <div className="review">
        <h3>Client Review</h3>
        <p>
          Being new parents comes with a lot of responsibility, anxiety and
          unknowns. Having Keely be at our sides throughout the birth process
          was everything our little family needed. Keely was thoughtful,
          informative professional and intentional in how she worked with us
          leading up to our son’s birth, and amazing the day of. She was calm,
          cool and collected as she worked with both mom and dad along with the
          hospital staff throughout our entire birth experience. It was both an
          intense yet magical experience made better with Keely’s guidance and
          support. We would highly recommend working with Keely as your birth
          doula. - Israel, Lauren and Sauvie
        </p>
      </div>
      <DoulaPackageCard />
    </div>
  );
};

export default DoulaPackage;
