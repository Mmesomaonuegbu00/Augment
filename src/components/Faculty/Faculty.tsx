import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Faculty = () => {
    const teachers = [
        { id: 1, name: 'John Doe', company: 'Google', src: '/a3.jpg', title: 'CEO' },
        { id: 2, name: 'Jane Smith', company: 'Wikipedia', src: '/a2.jpg', title: 'CEO' },
        { id: 3, name: 'Bob Johnson', company: 'YouTube', src: '/a3.jpg', title: 'CEO' },
        { id: 4, name: 'Alice Brown', company: 'Shazam', src: '/a4.jpg', title: 'CEO' },
        { id: 5, name: 'Charlie Davis', company: 'LinkedIn', src: '/a5.jpg', title: 'CEO' },
        { id: 6, name: 'Charlie Davis', company: 'LinkedIn', src: '/a6.jpg', title: 'CEO' },
        { id: 7, name: 'Charlie Davis', company: 'LinkedIn', src: '/a9.jpg', title: 'CEO' },
        { id: 8, name: 'Charlie Davis', company: 'LinkedIn', src: '/a8.jpg', title: 'CEO' },
        { id: 9, name: 'Charlie Davis', company: 'LinkedIn', src: '/a7.jpg', title: 'CEO' },
    ];

    return (
        <div className="bg-black pt-14 pb-16 p-2">
            <div className=''>

                <div className='flex flex-col items-center justify-center'>
                    <p className='text-2xl text-gray-200 text-center'>Faculty</p>
                    <h1 className='text-white text-3xl mb-6 md:text-4xl lg:text-5xl font-sans text-center'>
                        Learn from business Legends
                    </h1>
                </div>


                <div className="relative  pt-10 ">
                    {/* Navigation buttons */}
                    <div className="absolute left-0 top-[45%] z-10 cursor-pointer bg-black/30 p-3 rounded-full text-white swiper-button-prev-custom">
                        <FaArrowLeft size={24} />
                    </div>
                    <div className="absolute right-0 top-[45%] z-10 cursor-pointer bg-black/30 p-3 rounded-full text-white swiper-button-next-custom">
                        <FaArrowRight size={24} />
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10} // Space between cards
                        slidesPerView={1} // Shows 3 cards at a time on larger screens

                        pagination={{ clickable: true }} // Enable dots below the slider
                        breakpoints={{
                            640: { slidesPerView: 1 }, // 1 card per view on small screens (mobile)
                            768: { slidesPerView: 2 }, // 2 cards per view on medium screens
                            1024: { slidesPerView: 3 },
                            1600: { slidesPerView: 5 } // 3 cards per view on large screens
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }}

                        className="pt-26 "
                    >
                        {teachers.map((teacher) => (
                            <SwiperSlide key={teacher.id}>
                                <div className='relative w-[360px] md:w-[370px] h-[400px] sm:h-[500px] lg:h-[550px] rounded-2xl mt-16 mb-16 mx-auto'>
                                    <Image
                                        src={teacher.src}
                                        alt={teacher.name}
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                                        className="rounded-lg object-cover "
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent/5 to-transparent/10"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                                        <h2 className='text-white text-2xl md:text-3xl font-sans font-medium pb-2'>
                                            {teacher.name}
                                        </h2>

                                        <p className='text-gray-400 text-xl md:text-2xl font-sans'>
                                            {teacher.title}
                                        </p>
                                        <p className='text-white text-xl md:text-3xl font-sans font-medium pb-2'>
                                            {teacher.company}
                                        </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='flex justify-center'>
                        <button className='border-[1px] border-gray-10 text-gray-100 rounded-full py-2 px-16 flex justify-center mt-6 mb-16'>
                            Meet Our Faculty
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Faculty;
