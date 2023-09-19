import React from "react";
import "./HomePage.css";
import Header from "./Header&Footer/Header";
import PriceCard from "./components/PriceCard";

export default function HomePage() {
  return (
    <div>
      <div className="home-page">
        <div className="header-container">
          <Header />
        </div>
        <div className="home-container">
          <h1 className="price-card-boxes">
            <PriceCard />
          </h1>
        </div>
        <div className="footer-container"></div>
      </div>
    </div>
  );
}
