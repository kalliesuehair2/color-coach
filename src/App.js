import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Formulate from './pages/Formulate';
import Clients from './pages/Clients';
import History from './pages/History';
import Pricing from './pages/Pricing';
import Branding from './pages/Branding';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Formulate />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/history" element={<History />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/branding" element={<Branding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
