import React from "react";
import "./HomePage.css";
import Header from "./Header&Footer/Header";

import DoulaPackage from "./components/DoulaPackage";
import ReikiPackage from "./components/ReikiPackage";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="home-container">
        <h2 className="home-title">Reiki & Doula Packages</h2>
        <div className="package-boxes">
          <ReikiPackage />
          <DoulaPackage />
        </div>
      </div>
    </div>
  );
}
