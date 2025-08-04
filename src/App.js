import React, { useContext } from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import Footer from './components/Footer';
//import router
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext';

const FooterWrapper = () => {
  const location = useLocation();
  // List all paths where you want to hide the footer
  const hideFooterPaths = ['/', '/about', '/contact'];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);

  return !shouldHideFooter ? <Footer /> : null;
};

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">
            <AnimRoutes />
          </div>
          <FooterWrapper />
        </div>
      </Router>
      {/* cursor */}
      <motion.div 
        variants={cursorVariants}
        animate={cursorBG}
        className='w-[32px] h-[32px] bg-primary fixed
        top-0 left-0 pointer-events-none z-50 rounded-full'></motion.div>
    </>
  );
};

export default App;
