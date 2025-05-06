import React, { useEffect } from "react";
import "../styles/contactus.css";
import contactus2 from "../assets/images/contactus2.png";

const ContactUs = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
        document.querySelectorAll(".nav-links a").forEach(anchor => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            if (targetId === "about us") {
              window.location.href = "index.html"; // Redirect to about us page
            } else {
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 50,
                  behavior: "smooth"
                });
              }
            }
          });
        });
      }, []);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            <a href="/home">Home</a> » <span>Contact Us</span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          
          {/* Left Section: Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <h1>Feel Free To Get In Touch</h1>
            <p>
              IT drives business efficiency, cybersecurity, data management,
              and innovation through emerging technologies and robust support.
            </p>
            
            <h3 className="city">Chennai</h3>
            <p>
              📫 Email:{" "}
              <a href="mailto:ceitcschennai@gmail.com">ceitcschennai@gmail.com</a>
            </p>
            <p>📱 Mobile: +91 9790835693</p>
            <p>📱 Mobile: +91 9791424421</p>
            <p>📱 Mobile: +971 545313855</p>
            <p>
              📍 Address: F3 Plot, 36, Ranganatha Nagar, second street,
              Selaiyur, Chennai, Tamil Nadu 600073
            </p>
          </div>

          {/* Right Section: Contact Form */}
          <div className="contact-form">
            <h1>Drop Us A Message</h1>
            <form>
              <div className="input-group">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Mobile Number" required />
              </div>
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              
              {/* Captcha Placeholder */}
              <div className="captcha">
                <input type="checkbox" /> I am human
                <img src={contactus2} alt="Captcha" />
              </div>

              <button type="submit" className="quote-btn">
                Submit Your Enquire
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
