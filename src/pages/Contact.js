import React, { useState } from "react";
import "../Blogger.css";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. We'll get back to you soon.",
      icon: "success",
      confirmButtonText: "OK"
    });

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="page-wrapper center-content">
      <div className="form-container glass-card">
        <h2 className="form-title">
          Contact <span className="gradient-text">Us</span>
        </h2>

        <p className="form-subtitle">
          Fill out the form below and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="custom-form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;