import React from "react";
import "./About.css";

import Header from "./Header&Footer/Header";
import Clouds from "./components/Clouds";

export default function About() {
  return (
    <div className="about-background">
      <Header />
      <div className="container">
        <div className="cloud-background">
          <Clouds />
        </div>
      </div>
    </div>
  );
}
