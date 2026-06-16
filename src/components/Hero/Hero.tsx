
import React from 'react'
import HeroCard from './HeroCard'
import { FaCalendarMinus, FaYoutube } from 'react-icons/fa'
import { FaCertificate } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className="bg-black pt-26 md:pt-16 pb-16 relative">
            <div className="absolute top-[20px] left-0 h-full w-[65%] sm:w-[35%] bg-black z-20 flex justify-center items-center pb-16 pt-16"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
                }}
            >
                <div className='px-6 text-white text-left'>
                    <h1 className='text-white text-3xl mb-6 md:text-4xl xl:text-7xl font-sans '>
                        The MBA <br /> of Tomorrow
                    </h1>
                    <p className='text-[14px]  sm:text-base leading-relaxed max-w-[300px] pb-6'>
                        Gain real business skills today. Join this MBA alternative,
                        taught by the founders of Wikipedia, YouTube, Shazam, and more.
                    </p>


                    <ul className='flex flex-wrap gap-4 mt-6 text-gray-100 pb-8'>
                        <li className='flex items-center gap-2'>
                            <FaYoutube />
                            ONLINE
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCalendarMinus />
                            SELF-PACED
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaCertificate />
                            CERTIFICATE
                        </li>

                    </ul>

                    <button className=' items-center gap-0.5   text-black  bg-lime-300 py-2  md:py-3 text-[12px] font-semibold md:px-8 px-4 rounded-4xl hover:bg-lime-900 transition-all duration-200 '>
                        Discover All Programms

                    </button>
                </div>
            </div>



            {/* Content */}
            <div className="relative z-10 flex gap-4 items-center pl-10 lg:pl-[20rem] mx-auto">
                <HeroCard image="/a4.jpg"  className="hidden md:block" />
                <HeroCard image="/a3.jpg"  />
                <HeroCard image="/a5.jpg"  />
                <HeroCard image="/a2.jpg" className="hidden md:block" />
            </div>

        </div>


    )
}

export default Hero
