import React from "react";
import "./DoulaPackageCard.css";

const DoulaPackageCard = () => {
  const doulaPackage = {
    name: "Standard Doula Package",
    description:
      "A birth doula is a trained birth professional that provides continuous emotional, physical and informational support during the perinatal period. As your doula I work for you and your partner, supporting whatever you decide for your birth experience. Complentary consultation to see if we are a good fit. ",
    prices: [
      {
        title: "Standard Doula Package",
        price: "$1500.00",
        description:
          "Includes: 3 prenatal visits, continuous support during labor and birth & 2 postpartum follow ups ",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        title: "Standard Doula + Reiki Package",
        price: "$2000.00",
        description:
          "Includes: Birth doula package in addition to Reiki session at each prenatal and postpartum meeting and continuous Reiki during labor and delivery with consent. Additional Reiki sessions available at a discounted rate.",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
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
      <div className="description-space">
        Can be paid in full or in two installments. First half due at hire and
        second half due at 36 weeks.
      </div>
      <div>
        We can create a customized care plan according to your needs. We can
        also discuss an individualized payment plan or sliding scale payments in
        case of financial hardship.
      </div>
    </div>
  );
};

export default DoulaPackageCard;
