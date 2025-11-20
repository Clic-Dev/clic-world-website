import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClicWorldWebsite from './components/ClicWorldWebsite';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ClicWorldWebsite />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
