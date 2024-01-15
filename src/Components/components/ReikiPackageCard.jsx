import React from "react";
import "./ReikiPackageCard.css";

const ReikiPackageCard = () => {
  const reikiPackage = {
    title: "Reiki",
    description: "Reiki Sessions",
    prices: [
      {
        price: "$60.00 - $85.00/hour",
        description: "",
        features: ["Fridge and Friends - every Tuesday"] /* add the address */,
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
              <>
                <div key={featureIndex}>{feature}</div>
                <hr />
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReikiPackageCard;
