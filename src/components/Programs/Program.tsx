'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Image from 'next/image'
import { FaYoutube, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Program = () => {
    const cards = [
        {
            id: 1,
            image: '/a3.jpg',
            title: ['Join', 'Design', 'Bootcamp'],
            description: 'Our flagship program, designed for the next generation of leaders, it also offers a unique opportunity to learn from the best in the industry.',
            button: 'Join Today'
        },
        {
            id: 2, image: '/a5.jpg',
            title: ['The', 'Augment', 'MBA'],
            description: 'Our flagship program, designed for the next generation of leaders, taught by founders of Wikipedia, YouTube, Shazam, and more.',
            button: 'Apply Now'
        },
        {
            id: 3,
            image: '/a8.jpg',
            title: ['Become', 'Frontend', 'Pro'],
            description: 'Gain real business skills today from our world-class faculty.',
            button: 'Apply Now'
        },
        {
            id: 4,
            image: '/a5.jpg',
            title: ['Creative', 'UI/UX', 'Design'],
            description: 'Learn the modern approach to UI/UX with real-world projects.',
            button: 'Get Started'
        },
        {
            id: 5,
            image: '/a7.jpg',
            title: ['Data', 'Science', 'Mastery'],
            description: 'Master data with guidance from top data scientists.',
            button: 'Enroll Now'
        }
    ]

    const users = [
        { id: 1, name: 'User 1', src: '/a1.jpg' },
        { id: 2, name: 'User 2', src: '/a2.jpg' },
        { id: 3, name: 'User 3', src: '/a3.jpg' },
        { id: 4, name: 'User 4', src: '/a4.jpg' },
        { id: 5, name: 'User 5', src: '/a5.jpg' },
        { id: 6, name: 'User 6', src: '/a2.jpg' },
        { id: 7, name: 'User 7', src: '/a4.jpg' },
    ]

    const visibleUsers = users.slice(0, 5)
    const remaining = users.length - visibleUsers.length

    return (
        <div className='bg-black py-16'>
            <div className="text-center">
                <p className='text-2xl text-gray-200'>Education</p>
                <h1 className='text-white text-4xl md:text-5xl font-semibold font-sans mt-2'>Explore All Programs</h1>
            </div>

            <div className="relative px-6 pt-16">
                {/* Navigation buttons */}
                <div className="absolute left-0 top-[45%] z-10 cursor-pointer bg-black/30 p-3 rounded-full text-white swiper-button-prev-custom">
                    <FaArrowLeft size={24} />
                </div>
                <div className="absolute right-0 top-[45%] z-10 cursor-pointer bg-black/30 p-3 rounded-full text-white swiper-button-next-custom">
                    <FaArrowRight size={24} />
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom'
                    }}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className='w-full h-[45rem] border rounded-2xl relative overflow-hidden'>
                                <Image
                                    src={card.image}
                                    alt={`Image of ${card.title[0]}`}
                                    fill
                                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px'
                                    priority
                                    className='object-cover'
                                />

                                <div className="absolute bottom-0 left-0 w-full h-[65%] bg-[#1a1a1a] z-20 px-6 py-6 flex flex-col justify-center items-center text-center"
                                    style={{
                                        WebkitMaskImage: 'linear-gradient(to top, black 70%, transparent 100%)',
                                        maskImage: 'linear-gradient(to top, black 70%, transparent 100%)'
                                    }}
                                >
                                    <h1 className='text-white text-3xl lg:text-4xl font-semibold'>
                                        {card.title[0]} <span className='text-lime-400'>{card.title[1]}</span> {card.title[2]}
                                    </h1>

                                    <div className='flex items-center justify-center gap-2 pt-4'>
                                        <p className='text-gray-300 text-[16px] flex items-center gap-1'>
                                            <span className='text-lime-400 flex items-center'>4.8/5 <FaStar /></span> (+100 student reviews)
                                        </p>
                                    </div>

                                    <p className='text-gray-300 text-sm leading-7 pt-2'>{card.description}</p>

                                    <div className="flex items-center justify-center mt-4">
                                        {visibleUsers.map((user, index) => (
                                            <div key={user.id} className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden -ml-2 ${index === 0 ? 'ml-0' : ''}`}>
                                                <Image src={user.src} alt={user.name} width={40} height={40} className="object-cover w-full h-full" />
                                            </div>
                                        ))}
                                        {remaining > 0 && (
                                            <div className="w-10 h-10 rounded-full bg-gray-300 text-sm flex items-center justify-center text-gray-700 font-medium -ml-2 border-2 border-white">
                                                +{remaining}
                                            </div>
                                        )}
                                    </div>

                                    <p className='text-gray-300 text-sm mt-3'>Taught by 12 world founders and executives</p>

                                    <div className="flex justify-center gap-4 mt-4 text-[12px] lg:text-[14px] font-sans text-gray-400">
                                        <button className='text-lime-400 border-2 border-lime-400 rounded-full px-8 py-2 flex items-center gap-2'>
                                            <FaYoutube /> {card.button}
                                        </button>
                                        <button className='bg-lime-400 text-black rounded-full px-8 py-2 flex items-center gap-2'>
                                            {card.button} →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Program
