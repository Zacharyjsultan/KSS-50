import React from "react";
import "./DoulaPackageCard.css";

const DoulaPackageCard = () => {
  const doulaPackage = {
    title: "Doula Package",
    prices: [
      {
        price: "$19.99/month",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        price: "$29.99/month",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      },
      {
        price: "$39.99/month",
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
      <h2 className="package-title">{doulaPackage.title}</h2>
      {doulaPackage.prices.map((price, priceIndex) => (
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

export default DoulaPackageCard;
