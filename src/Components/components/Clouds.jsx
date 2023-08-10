import React from "react";
import "./Clouds.css";
import Header from "../Header&Footer/Header";

export default function Clouds() {
  const numClouds = 1000; // Adjust the number of clouds as needed

  const getRandomPosition = () => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const cloudHeight = 100;
    const cloudWidth = 200;

    const randomX = Math.floor(Math.random() * (windowWidth - cloudWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - cloudHeight));

    return { x: randomX, y: randomY };
  };

  const clouds = Array.from({ length: numClouds }).map((_, index) => {
    const randomPosition = getRandomPosition();
    const cloudStyle = {
      left: randomPosition.x + "px",
      top: randomPosition.y + "px",
    };

    return (
      <div className="giant-cloud" style={cloudStyle} key={index}>
        {/* Cloud content */}
      </div>
    );
  });

  return (
    <div className="about-background">
      <Header />
      <div className="container">{clouds}</div>
    </div>
  );
}