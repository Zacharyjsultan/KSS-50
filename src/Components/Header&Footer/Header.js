import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-buttons">
        <img className="logo-3" src="/keelylogo.png" alt="K Logo" />
        <Link to="/about" className="button-1">
          Keely Shea
        </Link>
        <Link to="/" className="button-2">
          Pricing & Services
        </Link>
        <Link to="/testimonials" className="button-3">
          Testimonals
        </Link>
        <Link to="/contact" className="button-3">
          Contact Me
        </Link>
      </div>
    </>
  );
}
