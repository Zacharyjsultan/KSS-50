import React from "react";
import "./PriceCard.css";

const packages = [
  {
    title: "Doula Package",
    price: "$19.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Reiki Package",
    price: "$39.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Doula Reiki Package",
    price: "$59.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
  {
    title: "Doula Reiki Shmeiki Package",
    price: "$79.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const PriceCard = () => {
  return (
    <div className="pricing-container">
      {packages.map((pkg, index) => (
        <div className="package" key={index}>
          <h2 className="package-title">{pkg.title}</h2>
          <div className="package-price">{pkg.price}</div>
          <ul className="package-features">
            {pkg.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
