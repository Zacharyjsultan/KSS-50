import React from "react";
import "./Contact.css";
import Header from "./Header&Footer/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-page">
        <div>
          <form
            action="https://public.herotofu.com/v1/b45438b0-2594-11ee-8058-515da3888232"
            method="post"
            accept-charset="UTF-8"
          >
            <div>
              <label for="name">Name</label>
              <input
                name="Name"
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label for="name"> Email</label>
              <input
                name="Email"
                id="email"
                type="text"
                placeholder="YourEmail@Gmail.com"
                required
              />
            </div>
            <div>
              <label for="email">Message</label>
              <input
                name="Message"
                id="message"
                type="text"
                placeholder="How can I help?"
                required
              />
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
                  tabindex="-1"
                  autocomplete="off"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
