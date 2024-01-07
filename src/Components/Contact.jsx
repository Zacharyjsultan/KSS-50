import React from "react";
import "./Contact.css";
import Header from "./Header&Footer/Header";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <div>
        <div className="contact-title">
          <h1>Let's Connect</h1>
          <div className="contact-form-container">
            <form
              action="https://public.herotofu.com/v1/b45438b0-2594-11ee-8058-515da3888232"
              method="post"
              acceptCharset="UTF-8"
            >
              <div>
                <label className="entry-titles" htmlFor="name">
                  Name
                </label>
                <input
                  name="Name"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="entry-titles" htmlFor="email">
                  Email
                </label>
                <input
                  name="Email"
                  id="email"
                  type="text"
                  placeholder="YourEmail@Gmail.com"
                  required
                />
              </div>
              <div>
                <label className="entry-titles" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="Message"
                  className="message"
                  placeholder="How can I help?"
                  required
                ></textarea>
              </div>
              <div>
                <input type="submit" value="Reach Out" />
                <div
                  style={{
                    textIndent: "-99999px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    position: "absolute",
                  }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="calendly-link">
                  <Link to="https://calendly.com/keelyshea/reiki-session-1-hour">
                    <img
                      src="/keelylogo.png"
                      alt="Logo"
                      className="calendly-logo"
                      width="100"
                      height="50"
                    />
                  </Link>
                </div>
                <div className="disclaimer-container">
                  <p className="disclaimer-text">
                    COVID-19 Update: Prioritizing your safety, please reschedule
                    if you've had symptoms or contact with a positive case.
                    <br />
                    Your well-being matters. Thank you for understanding.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
