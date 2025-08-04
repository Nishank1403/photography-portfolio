import React from 'react';

// 1. Create an array of image paths
const portraitImages = [
  '/images/portfolio/portrait/1.png',
  '/images/portfolio/portrait/2.png',
  '/images/portfolio/portrait/3.png',
  '/images/portfolio/portrait/4.png',
  '/images/portfolio/portrait/5.png',
  '/images/portfolio/portrait/6.png',
  '/images/portfolio/portrait/7.png',
  '/images/portfolio/portrait/8.png',
  '/images/portfolio/portrait/9.png',
  '/images/portfolio/portrait/10.png',
  '/images/portfolio/portrait/11.png',
  '/images/portfolio/portrait/12.png',
  '/images/portfolio/portrait/13.png',
  '/images/portfolio/portrait/14.png',
  '/images/portfolio/portrait/15.png',
  '/images/portfolio/portrait/16.png',
  '/images/portfolio/portrait/17.png',
  '/images/portfolio/portrait/18.png',
];

const Portrait = () => {
  return (
    <section className='section pt-[140px] pb-12'>
      <div className='container mx-auto'>
        <h1 className='h1 mb-6'>Portrait Photography</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/* 2. Map over the new 'portraitImages' array */}
          {portraitImages.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`Portrait ${i + 1}`}
              className='rounded shadow-md w-full h-[550px] object-cover object-top'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portrait;