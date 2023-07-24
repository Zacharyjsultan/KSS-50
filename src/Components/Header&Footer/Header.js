import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-buttons">
      <Link to="/about" className="button-1">
        Keely Shea
      </Link>
      <Link to="/" className="button-2">
        Home
      </Link>
      <Link to="/contact" className="button-3">
        Contact Me
      </Link>
    </div>
  );
}
