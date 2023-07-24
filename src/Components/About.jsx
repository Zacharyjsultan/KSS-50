import React from "react";
import "./About.css";
import { Button } from "@mui/material";
import Footer from "./Header&Footer/Footer";
import Header from "./Header&Footer/Header";

export default function About() {
  return (
    <div className="about-background">
      <Header />
      <div className="container">
        <div className="entry-button">
          <Button href="/" className="button"></Button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
