import React from 'react';

// 1. Create an array of image paths
const productImages = [
  '/images/portfolio/product/1.png',
  '/images/portfolio/product/2.png',
  '/images/portfolio/product/3.png',
  '/images/portfolio/product/4.png',
  '/images/portfolio/product/5.png',
  '/images/portfolio/product/6.png',
  '/images/portfolio/product/7.png',
  '/images/portfolio/product/8.png',
  '/images/portfolio/product/9.png',
  '/images/portfolio/product/10.png',
  '/images/portfolio/product/11.png',
];

const Product = () => {
  return (
    <section className='section pt-[140px] pb-12'>
      <div className='container mx-auto'>
        <h1 className='h1 mb-6'>Product Photography</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/* 2. Map over the new 'productImages' array */}
          {productImages.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`Product ${i + 1}`}
              className='rounded shadow-md w-full object-cover max-h-[500px]'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;