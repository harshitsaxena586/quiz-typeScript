import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Quiz from './Pages/Quiz';
import Navbar from './Components/Navbar';
import Review from './Pages/Review';

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/quiz/:quizname" element={<Quiz />} />
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
