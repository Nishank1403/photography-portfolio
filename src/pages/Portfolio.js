import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
// import { CursorContext } from '../context/CursorContext';
import { categories } from '../data/categories';

const Portfolio = () => {
  // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='section pt-[140px] pb-12'
    >
      <div 
        className='container mx-auto'
      >
        <h1 className='h1 text-center mb-8'>Portfolio</h1>
        <div 
          className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'
        >
          {categories.map((cat, idx) => (
            <Link to={cat.path} key={idx} className="group">
              <img
                src={cat.image} 
                loading='lazy'
                alt={cat.title}
                // These classes create the desired look
                className='w-full h-[650px] object-cover rounded-lg hover:scale-105 transition-all duration-300'
              />
              <h2 className='mt-4 text-xl font-semibold'>{cat.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;