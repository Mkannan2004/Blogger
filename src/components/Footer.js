import React from "react";
import { Link } from "react-router-dom";
import "../Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
       
        <div className="footer-brand">
          <h3><span>My</span>Blogger</h3>
          <p>Share your stories, ideas, and knowledge with the world.</p>
        </div>

      
        <div className="footer-links">
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyBlogger. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;