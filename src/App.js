import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="container mt-5 container-gral">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
