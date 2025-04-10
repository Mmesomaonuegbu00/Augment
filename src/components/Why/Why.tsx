'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Why = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contents = [
    {
      title: 'Real-World Insights Over Textbooks',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat in nunc facilisis tincidunt.',
    },
    {
      title: 'Learn from Top Industry Experts',
      text: 'Get mentorship from those who’ve built real businesses, not just taught about them.',
    },
    {
      title: 'Hands-On Projects and Networking',
      text: 'Work on live projects, solve real problems, and connect with future collaborators.',
    },
  ];

  return (
    <div className='h-full'>
      <div className='pt-16 pb-16 w-[95%] mx-auto'>
        <p className='text-2xl text-gray-700 text-center'>Why Augment?</p>
        <h1 className=' text-3xl md:text-4xl lg:text-5xl text-black text-center pt-4'>The New MBA Experience</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-8 w-[95%] gap-10 mx-auto'>
          <div className='flex flex-col items-start'> {/* Changed from items-center to items-start */}
            <ul className='flex gap-3 text-gray-600 text-sm mt-16'>
              {[0, 1, 2].map((index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border p-2 h-8 w-8 flex items-center justify-center text-center font-medium cursor-pointer transition-all duration-200 ${activeIndex === index
                    ? 'bg-lime-300 text-white border-lime-300'
                    : 'border-gray-600'
                    }`}
                >
                  {index + 1}
                </li>
              ))}
            </ul>

            <div className='flex flex-col max-w-[500px] mt-10 md:mt-26'>
              <p className='text-gray-600 text-2xl font-semibold'>WHY AUGMENT?</p>
              <h1 className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold mt-10 text-left'>
                {contents[activeIndex].title}
              </h1>
              <p className='text-gray-600 text-[20px] mt-10 text-left'>
                {contents[activeIndex].text}
              </p>
            </div>
          </div>


          <Image src="/w1.jpg" alt='image' width={1000} height={500} className='mt-20 rounded-xl' />

        </div>

        <button className='flex justify-center items-center gap-0.5  border border-gray-800 text-black  bg-lime-300 py-2  md:py- 4text-[12px] font-semibold md:px-8 px-6 rounded-4xl hover:bg-lime-900 transition-all duration-200  ml-10 mt-10'>
          Discover All Programms

        </button>
      </div>
    </div>
  );
};

export default Why;
