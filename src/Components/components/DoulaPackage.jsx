import React from "react";
import DoulaPackageCard from "./DoulaPackageCard";

const DoulaPackage = () => {
  return (
    <div className="package-container">
      <h2>Doula Package</h2>
      <p>Background of the Doula modality goes here.</p>
      <div className="review">
        <h3>Client Review</h3>
        <p>Client testimonial for Doula package goes here.</p>
      </div>
      <DoulaPackageCard />
    </div>
  );
};

export default DoulaPackage;
