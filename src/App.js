import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <img src="icon.png" alt="icon" className="icon" />
      <span className="username">Username</span>
    </div>
    <div className="navbar-right">
      <a href="#home">Home</a>
      <a href="#about">Mobile & Devices</a>
      <a href="#services">Clould Architecture</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

const MainContent = () => (
  <div className="main-content">
    <h1>Welcome to My Website</h1>
    <p>Basic content</p>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2024 Archit Rupa. All rights reserved.</p>
  </footer>
);

export default App;