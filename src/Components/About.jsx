import React from "react";
import "./About.css";
import { Button } from "@mui/material";

export default function About() {
  return (
    <div className="about-background">
      <div className="container">
        <div className="entry-button">
          <Button href="/" className="button">
            Keely Shea
          </Button>
        </div>
      </div>
    </div>
  );
}
