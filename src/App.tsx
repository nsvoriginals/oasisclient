import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Landing from './components/Landing';
import Features from './components/Features';
import About from './components/About';
import Docs from './components/Docs';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <Router>
      <Routes>
        {/* Conditional rendering for Landing and Start based on gameStarted */}
        <Route 
          path="/" 
          element={gameStarted ? <Start /> : <Landing onStart={handleStartGame} />} 
        />
        
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
};

export default App;
