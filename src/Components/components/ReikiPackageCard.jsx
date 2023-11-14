import React from "react";
import "./ReikiPackageCard.css";

const ReikiPackageCard = () => {
  const reikiPackage = {
    title: "Reiki",
    description:
      "Experience the healing power of Reiki with our tailored sessions.",
    prices: [
      {
        price: "$85.00/hour",
        description:
          "Indulge in a relaxing experience with a sound bath, oil diffusion, and personalized sessions.",
        features: ["Sound bath", "Oil Diffusion", "Tailored sessions"],
      },
    ],
  };

  return (
    <div className="package">
      <h2 className="package-title">{reikiPackage.title}</h2>
      <p className="package-description">{reikiPackage.description}</p>
      {reikiPackage.prices.map((price, priceIndex) => (
        <div className="package-price" key={priceIndex}>
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

export default ReikiPackageCard;
