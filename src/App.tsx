import React from 'react';
import './App.css';
import { Home, About } from 'pages';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';

const underConstructionDiv = (
  <div>
    <p>This page is under construction. Please come back later.</p>
    <p>
      For now, please feel free to download my resume from the 'Download CV'
      button at the top right or visit my
      <a
        href="https://www.linkedin.com/in/rupaka"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        LinkedIn page
      </a>
      .
    </p>
  </div>
);
// Define component for each page
const Portfolio: React.FC = () => (
  <div className="main-content">
    <h1>Portfolio Page</h1>
    {underConstructionDiv}
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
};

const NavBar: React.FC = () => (
  <nav className="navbar">
    <div className="navbar-username">
      <img src="/assets/images/archeetos.png" alt="arch" className="icon" />
      <NavLink to="/" className="username">
        archeetos
      </NavLink>
    </div>
    <div className="navbar-menu-items">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        About
      </NavLink>
    </div>
    <div className="navbar-right">
      <div className="download-cv">
        <a href="/assets/files/ArchitRupa_cv.pdf" download>
          Download CV
        </a>
      </div>
    </div>
  </nav>
);

const MainContent: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <p>© 2024 Archit Rupa. All rights reserved.</p>
  </footer>
);

export default App;
