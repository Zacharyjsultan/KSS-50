import React from "react";
import "./DoulaPackageCard.css";

const DoulaPackageCard = () => {
  const doulaPackage = {
    name: "Standard Doula Package",
    description:
      "Our standard doula package includes personalized support for a positive birthing experience.",
    prices: [
      {
        title: "Standard Doula Package",
        price: "$1500.00/month",
        description:
          "Comprehensive doula support with Feature 1, Feature 2, and Feature 3.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        title: "Standard Doula + Reiki Package",
        price: "$2000.00/month",
        description:
          "Enhanced doula support with Reiki healing, including Feature 1, Feature 2, Feature 3, and Feature 4.",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      },
      {
        title: "Custom Doula Package",
        price: "$",
        description: "Tailored doula services with Feature 1 and Feature 2.",
        features: ["Feature 1", "Feature 2"],
      },
    ],
  };

  return (
    <div className="package">
      <h2 className="package-title">{doulaPackage.name}</h2>
      <p className="package-description">{doulaPackage.description}</p>
      {doulaPackage.prices.map((price, priceIndex) => (
        <div className="package-price" key={priceIndex}>
          <h3>{price.title}</h3>
          {price.price}
          <p className="package-description">{price.description}</p>
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
