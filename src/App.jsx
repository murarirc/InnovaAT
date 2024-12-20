import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
