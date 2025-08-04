// src/App.js

import React from 'react';
// 1. Import useLocation to check the URL, and import your Footer
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';

// Import all your pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Food from './pages/Food';
import Fashion from './pages/Fashion';
import Portrait from './pages/Portrait';
import Product from './pages/Product';

const App = () => {
  // 2. Get the current location object
  const location = useLocation();

  // 3. Create a condition to check if the path starts with '/portfolio'
  // This will be true for '/portfolio', '/portfolio/food', '/portfolio/fashion', etc.
  const showFooter = location.pathname.startsWith('/portfolio');

  return (
    <div className='overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/portfolio/food' element={<Food />} />
        <Route path='/portfolio/fashion'element={<Fashion />} />
        <Route path='/portfolio/portrait' element={<Portrait />} />
        <Route path='/portfolio/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      {/* 4. Conditionally render the Footer */}
      {/* This line means: "If showFooter is true, then render the <Footer /> component" */}
      {showFooter && <Footer />}
    </div>
  );
};

export default App;