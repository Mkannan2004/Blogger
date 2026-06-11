import React from "react";
import "../Blogger.css";

function Terms() {
  return (
    <div className="page-wrapper center-content">
      <div className="form-container glass-card" style={{ textAlign: "center", lineHeight: "1.9" }}>
        
        <h2 className="form-title">
          Terms of <span className="gradient-text">Service</span>
        </h2>
        
        <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "var(--text-muted)" }}>
          By accessing or using MyBlogger, you agree to follow our terms and guidelines.
        </p>
        
        <h3 style={{ fontSize: "1.4rem", color: "var(--text-main)", marginTop: "30px", marginBottom: "15px" }}>
          1. Content Ownership
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "20px" }}>
          You own all the content you create and publish on our platform. However, you are responsible for making sure your content does not violate any copyrights or laws.
        </p>
        
        <h3 style={{ fontSize: "1.4rem", color: "var(--text-main)", marginTop: "30px", marginBottom: "15px" }}>
          2. Prohibited Content
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
          Users are strictly banned from publishing hateful speech, abusive text, or spam content on this blogging platform.
        </p>

      </div>
    </div>
  );
}

export default Terms;