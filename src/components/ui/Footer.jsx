import React from 'react'
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="contact-section">
  <h1 className="contact-heading">Contact Us</h1>

  <div className="contact-form-container">
    <h3 className="form-title">Contact Form</h3>

    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter subject"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Leave your message here"
          required
        ></textarea>
      </div>

      <button type="submit" className="continue-reading">
        Send Message
      </button>
    </form>
  </div>
</section>

    <section>
  <div class="footer">
    <div class="footer-links">
      <FaFacebookF />
<FaTwitter />
<FaInstagram />
<FaLinkedin />
<FaPinterestP />
    </div>
    <div class="footer-txt">
      <p>Copyright ©2025 All rights reserved | This template is made by Ayesha</p>
    </div>
  </div>
</section>


    </div>
  )
}

export default Footer
