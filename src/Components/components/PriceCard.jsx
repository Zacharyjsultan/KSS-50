import React from "react";
import "./PriceCard.css";

const packages = [
  {
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
  },
  {
    title: "Reiki Package",
    prices: [
      {
        price: "$39.99/month",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        price: "$49.99/month",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      },
      {
        price: "$59.99/month",
        features: [
          "Feature 1",
          "Feature 2",
          "Feature 3",
          "Feature 4",
          "Feature 5",
        ],
      },
    ],
  },
];

const PriceCard = () => {
  return (
    <>
      <div className="pricing-megaload">
        <div className="pricing-box">
          <div className="pricing-header">
            <h1 className="pricing-title">Pricing</h1>
          </div>
          <div className="pricing-container">
            {packages.map((pkg, index) => (
              <div className="package" key={index}>
                <h2 className="package-title">{pkg.title}</h2>
                {pkg.prices.map((price, priceIndex) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
