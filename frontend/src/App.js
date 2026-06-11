import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Articles from './pages/Articles';
import Create from './pages/Create';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import './Blogger.css';

function App() {
  const [user, setUser] = useState(null); 

  return (
    <Router>

      <div className="app-main" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        <Navbar user={user} setUser={setUser} />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/create" element={<Create user={user} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>

        <Footer /> 

      </div>
    </Router>
  );
}

export default App;