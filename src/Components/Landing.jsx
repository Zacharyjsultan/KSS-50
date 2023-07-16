import React from "react";
import "./Landing.css";
import { Button } from "@mui/material";

export default function Landing() {
  return (
    <div className="landing-background">
      <div className="container">
        <div className="entry-button">
          <Button href="/HomePage" className="button">
            Keely Shea
          </Button>
        </div>
      </div>
    </div>
  );
}
