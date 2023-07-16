import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-buttons">
      <Link to="/" className="button-1">
        Keely Shea
      </Link>
      <Link to="/homepage" className="button-2">
        Home
      </Link>
      <Link to="/contact" className="button-3">
        Contact Me
      </Link>
    </div>
  );
}
