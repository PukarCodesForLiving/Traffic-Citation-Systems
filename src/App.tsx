import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CitationManager from './components/CitationManager';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Dashboard />
      <CitationManager />
    </div>
  );
}

export default App;
