import React from "react";
import ReikiPackageCard from "./ReikiPackageCard";

const ReikiPackage = () => {
  return (
    <div className="package-container">
      <h2>Reiki Package</h2>
      <p>Background of the Reiki modality goes here.</p>
      <div className="review">
        <h3>Client Review</h3>
        <p>Client testimonial for Reiki package goes here.</p>
      </div>
      <ReikiPackageCard />
    </div>
  );
};

export default ReikiPackage;
