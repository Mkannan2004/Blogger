import React from "react";
import "../Blogger.css";

function Privacy() {
  return (
    <div className="page-wrapper center-content">
      <div className="form-container glass-card" style={{ textAlign: "center", lineHeight: "1.9" }}>
        
        <h2 className="form-title">
          Privacy <span className="gradient-text">Policy</span>
        </h2>
        
        <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "var(--text-muted)" }}>
          At MyBlogger, we respect your privacy. This policy explains what information we collect and how we use it.
        </p>
        
        <h3 style={{ fontSize: "1.4rem", color: "var(--text-main)", marginTop: "30px", marginBottom: "15px" }}>
          1. Information We Collect
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "20px" }}>
          Currently, since this app uses local storage, your blog posts and data are stored entirely inside your own browser memory. We do not collect or save your data on our external servers.
        </p>
        
        <h3 style={{ fontSize: "1.4rem", color: "var(--text-main)", marginTop: "30px", marginBottom: "15px" }}>
          2. Cookies
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
          We may use basic browser features to enhance your reading experience and keep track of your dashboard settings.
        </p>

      </div>
    </div>
  );
}

export default Privacy;