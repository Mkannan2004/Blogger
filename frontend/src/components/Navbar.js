import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiUser, FiLogOut } from "react-icons/fi";
import AuthModal from "./AuthModal";
import "../Blogger.css";

function Navbar({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/articles?search=${searchQuery}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const handleLogout = () => {
    setUser(null); 
    setShowProfile(false);
    navigate("/");
  };

  return (
    <>
      <nav className="premium-navbar">
        <div className="navbar-container">
          <Link to="/" className="brand-logo">
            <span className="gradient-text">My</span>Blogger
          </Link>

          <div className={`nav-links-wrapper ${isOpen ? "active" : ""}`}>
            <ul className="nav-menu">
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/articles" onClick={toggleMenu}>Articles</Link></li>
              <li>
                <Link to="/create" onClick={toggleMenu} className="nav-btn write-btn">
                  Write a Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-actions">
       
            <div className="search-box">
              {isSearchOpen && (
                <form onSubmit={handleSearchSubmit} className="search-form">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </form>
              )}
              <button className="icon-btn search-icon" onClick={toggleSearch}>
                {isSearchOpen ? <FiX /> : <FiSearch />}
              </button>
            </div>

        
            {!user ? (
          
              <button onClick={() => setIsAuthOpen(true)} className="nav-btn signin-btn">
                Sign In
              </button>
            ) : (
              
              <div className="profile-menu" style={{ position: "relative" }}>
                <button onClick={() => setShowProfile(!showProfile)} className="profile-icon icon-btn">
                  <FiUser />
                </button>
                
                {showProfile && (
                  <div className="profile-dropdown glass-card" style={{
                    position: "absolute",
                    right: 0,
                    top: "50px",
                    background: "white",
                    padding: "15px",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    minWidth: "180px",
                    zIndex: 100
                  }}>
                    <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>{user.username || "User"}</h4>
                    <p className="user-email" style={{ margin: "0 0 10px 0", fontSize: "0.85rem", color: "#666" }}>{user.email}</p>
                    <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "10px 0" }} />
                    <button onClick={handleLogout} className="logout-btn" style={{
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px"
                    }}>
                      <FiLogOut /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button className="mobile-toggle" onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

   
      {isAuthOpen && (
        <AuthModal 
          onClose={() => setIsAuthOpen(false)} 
          setUser={setUser} 
        />
      )}
    </>
  );
}

export default Navbar;