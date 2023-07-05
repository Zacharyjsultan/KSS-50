import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header&Footer/Header";
import Footer from "./Header&Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div>
        <h1>HomePage</h1>
        <Link to="/" className="button-1">
          Go to HomePage
        </Link>
        <Link to="/contact" className="button-2">
          Contact Me
        </Link>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
