import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import OnboardingPage from './pages/OnboardingPage';
import TemplatesPage from './pages/TemplatesPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen text-white bg-[#121212]">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<Navigate to="/onboarding" replace />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;