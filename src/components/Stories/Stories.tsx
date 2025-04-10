'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Stories = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [
    '/t1.jpg',
    '/t2.gif',
    '/t1.jpg',
    '/t2.gif',
    '/t1.jpg',
    '/t2.gif',
    '/t1.jpg',
    '/t2.gif',
    '/t1.jpg',
    '/t2.gif',
    '/t1.jpg',
    '/t2.gif',
    '/t1.jpg',
    '/t2.gif',
  ];

  const Gallery = () => setShowAll(!showAll);

  const displayedImages = showAll ? images : images.slice(0, 8);

  return (
    <div className='bg-black'>
      <div className='pt-16 pb-16'>

        <div className='pt-10 pb-10' >
          <p className='text-2xl text-gray-200 text-center'>Alumini Community</p>
          <h1 className='text-3xl  md:text-4xl lg:text-5xl text-white text-center pt-4'>500+ Success Stories</h1>

        </div>
        <div className='w-[90%] px-4 md:px-48 mx-auto text-center mt-10 relative'>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 relative z-10'>
            {displayedImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`img-${index}`}
                width={500}
                height={500}
                priority
                className='w-full h-60 object-cover rounded-lg'
              />
            ))}
          </div>

        
          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-[80%] z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, black 10%, transparent 100%)',
              }}
            />
          )}

         
          <div className="relative z-30 mt-6">
            <button
              onClick={Gallery}
              className='text-gray-900 bg-white font-semibold rounded-full hover:bg-gray-200 transition-all duration-200 px-8 py-2'
            >
              {showAll ? 'See Less' : 'Load More'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Stories;
