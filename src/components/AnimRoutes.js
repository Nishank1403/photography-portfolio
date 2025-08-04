import React from 'react';
//import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Food from '../pages/Food';
import Portrait from '../pages/Portrait';
import Product from '../pages/Product';
import Fashion from '../pages/Fashion';

//import routes route & uselocation hook
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode='wait'>
  <Routes key={location.pathname} location={location}>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
    <Route path='/contact' element={<Contact/>} />
    {/* Category-specific portfolio pages */}
    <Route path='/portfolio/food' element={<Food />} />
    <Route path='/portfolio/portrait' element={<Portrait />} />
    <Route path='/portfolio/product' element={<Product />} />
    <Route path='/portfolio/fashion' element={<Fashion />} />
  </Routes>
  </AnimatePresence>
  );
};

export default AnimRoutes;
