import React from 'react';

// 1. Create an array of image paths
const foodImages = [
  '/images/portfolio/food/1.png',
  '/images/portfolio/food/2.png',
  '/images/portfolio/food/3.png',
  '/images/portfolio/food/4.png',
  '/images/portfolio/food/5.png',
  '/images/portfolio/food/6.png',
  '/images/portfolio/food/7.png',
  '/images/portfolio/food/8.png',
  '/images/portfolio/food/9.png',
  '/images/portfolio/food/10.png',
  '/images/portfolio/food/11.png',
  '/images/portfolio/food/12.png',
  '/images/portfolio/food/13.png',
  '/images/portfolio/food/14.png',
];

const Food = () => {
  return (
    <section className='section pt-[140px] pb-12'>
      <div className='container mx-auto'>
        <h1 className='h1 mb-6'>Food Photography</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/* 2. Map over the new 'foodImages' array */}
          {foodImages.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`Food ${i + 1}`}
              className='rounded shadow-md w-full h-[375px] object-cover'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;