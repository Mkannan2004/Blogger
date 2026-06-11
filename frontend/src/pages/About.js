import React from "react";
import "../Blogger.css";

function About() {
  return (
   
    <div className="page-wrapper center-content">
      
      
      <div className="form-container glass-card" style={{ textAlign: "center", lineHeight: "1.9" }}>
        
        <h2 className="form-title">
          About <span className="gradient-text">Us</span>
        </h2>
        
        <p style={{ marginBottom: "20px", fontSize: "1.1rem", color: "var(--text-muted)" }}>
          Welcome to <strong>MyBlogger</strong>! We are a platform where passionate writers share their insights, tutorials, and life experiences.
        </p>
        
        <p style={{ fontSize: "1.1rem", color: "var(--text-muted)" }}>
          Our mission is to build a helpful community of creators and readers. Whether you are a beginner looking to learn or a professional ready to share your expertise, MyBlogger is the perfect place for you.
        </p>
        
      </div>
    </div>
  );
}

export default About;