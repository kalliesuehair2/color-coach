import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-brand">🎨 Color Coach</div>
      <div className="nav-links">
        <Link to="/">Formulate</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/history">History</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/branding">Branding</Link>
      </div>
    </nav>
  );
}

export default Navigation;
