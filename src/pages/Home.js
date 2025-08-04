import React, { useContext, useEffect } from 'react';
// import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
// import { CursorContext } from '../context/CursorContext';

const Home = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  // Disable scroll on Home page only
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section px-0 py-0 overflow-hidden'
    >
      <div className='h-screen flex flex-col lg:flex-row'>
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          className='flex-1 flex flex-col justify-center items-center lg:items-start pt-[120px] px-8 lg:pt-0 lg:px-24'
        >
          <h1 className='h1'>
            Professional <br /> Photographer
          </h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
            Mumbai, India
          </p>
          <Link to={'/contact'} className='btn mb-[30px]'>
            Contact Me
          </Link>
        </motion.div>

        {/* Right Image Section with Background */}
        <div className='flex-1 bg-[#eef7f9] flex justify-center items-center px-4'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className='overflow-hidden'
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              src="/images/home/woman.png"
              alt='Photographer'
              className='object-contain max-h-[700px] w-full lg:max-w-[500px]'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
