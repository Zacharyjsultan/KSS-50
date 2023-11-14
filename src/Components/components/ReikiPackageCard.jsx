import React from "react";
import "./ReikiPackageCard.css";

const ReikiPackageCard = () => {
  const reikiPackage = {
    title: "Reiki Package",
    prices: [
      {
        price: "$85.00/hour",
        features: ["Sound bath", "Oil Diffusion", "Tailored sessions"],
      },
      {
        price: "$59.99/hour",
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
        ],
      },
    ],
  };

  return (
    <div className="package">
      <h2 className="package-title">{reikiPackage.title}</h2>
      {reikiPackage.prices.map((price, priceIndex) => (
        <div className="package-price" key={priceIndex}>
          {price.price}
          <ul className="package-features">
            {price.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReikiPackageCard;
