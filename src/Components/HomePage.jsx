import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div>
        <h1>HomePage</h1>
        <Link to="/" className="button-1">
          Go to HomePage
        </Link>
        <Link to="/contact" className="button-2">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
