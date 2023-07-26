import React from "react";
import "./HomePage.css";
import Header from "./Header&Footer/Header";
import Footer from "./Header&Footer/Footer";
import PriceCard from "./PriceCard";

export default function HomePage() {
  return (
    <div>
      <div className="home-page">
        <div className="header-container">
          <Header />
        </div>
        <div className="title">
          <h1>hello</h1>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
