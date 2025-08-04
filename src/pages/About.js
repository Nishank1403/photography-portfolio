import React, {useContext} from 'react';
// // import images
// import WomanImg from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
  <motion.section 
    initial={{ opacity: 0, y: '100%' }} 
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }} 
    transition={transition1}
    className='section bg-white fixed top-[100px] left-0 w-screen h-[calc(100vh-100px)] overflow-hidden z-50'>
    <div 
    onMouseEnter={mouseEnterHandler} 
    onMouseLeave={mouseLeaveHandler}
    className='container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className=' flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24
      text-center lg:text-left lg:pt-6'>
        {/* image */}
        <div className='flex-1 max-h-96 lg:max-h-max
        order-2 lg:order-none overflow-hidden'>
          <img src="/images/about/woman.png" alt='' />
        </div>
        {/* text */}
        <motion.div 
        initial={{ opacity: 0, y: '-80%' }} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '-80%' }} 
        transition={transition1}
        className='flex-1 pt-6 pb-28 lg:pt-0
        lg:w-auto z-10 flex flex-col justify-center
        items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-4 max-w-sm'>
            I'm Mohit Thakur, a passionate freelance photographer with a journey that began in 2021. 
            After completing a professional photography course, I started my career at Freshmind Creation, 
            where I focused on food photography, learning the art of styling and 
            lighting to make dishes visually appealing.
            {/* <br />
            <br /> */}
            After a year, I joined a casting company, where I specialized in kids' portfolio photography, 
            capturing their natural expressions and energy through creative shoots.
            
            Currently, I work independently as a freelance photographer, offering services in 
            portrait, product, food, and kids’ portfolio photography. My goal is to create meaningful visuals 
            that tell a story and leave a lasting impression.
          </p>
          <Link to={'/portfolio'} className='btn'>
            View my work
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default About;