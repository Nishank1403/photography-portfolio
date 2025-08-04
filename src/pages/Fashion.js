import React from 'react';

// 1. Create an array of image paths
const fashionImages = [
  '/images/portfolio/fashion/1.png',
  '/images/portfolio/fashion/2.png',
  '/images/portfolio/fashion/3.png',
  '/images/portfolio/fashion/4.png',
  '/images/portfolio/fashion/5.png',
  '/images/portfolio/fashion/6.png',
  '/images/portfolio/fashion/7.png',
  '/images/portfolio/fashion/8.png',
  '/images/portfolio/fashion/9.png',
  '/images/portfolio/fashion/10.png',
  '/images/portfolio/fashion/11.png',
  '/images/portfolio/fashion/12.png',
];

const Fashion = () => {
  return (
    <section className='section pt-[140px] pb-12'>
      <div className='container mx-auto'>
        <h1 className='h1 mb-6'>Fashion Photography</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/* 2. Map over the new 'fashionImages' array */}
          {fashionImages.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`Fashion ${i + 1}`}
              className='rounded shadow-md w-full h-[500px] object-cover'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fashion;