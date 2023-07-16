import React from "react";
import "./HomePage.css";
import Header from "./Header&Footer/Header";
import Footer from "./Header&Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <div className="home-page">
        <div className="header-container">
          <Header />
        </div>
        <div className="title">
          <h1>Hom Page</h1>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
