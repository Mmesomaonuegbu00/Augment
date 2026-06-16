import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa6';

interface ReveiwCarouselProps {
    image: string;
    altText: string;
    name: string;
    jobtitle: string;
    carouselDescription: string;

}



const ReveiwCard: React.FC<ReveiwCarouselProps> = ({ image, altText, name, carouselDescription, jobtitle }) => {
    return (
        <div className='w-full lg:w-[90%] relative mx-auto pb-16 pt-6 pl-6 pr-6 bg-[#fafafa] shadow-lg rounded-lg'>

            <div className='flex flex-col'>

                <div className='flex items-center mt-6'>
                    <FaStar className='text-black w-6 h-6' />
                    <FaStar className='text-black w-6 h-6' />
                    <FaStar className='text-black w-6 h-6' />
                    <FaStar className='text-black w-6 h-6' />
                    <FaStar className='text-black w-6 h-6' />

                </div>
                <p className='mt-12 test-sm sm:text-base  font-medium leading-[2rem] sm:leading-[1.8rem] md:leading-[2.5rem] text-gray-700'>{carouselDescription}</p>




                <div className='flex gap-2 items-center mt-6'>
                    <Image src={image} alt={altText} width={100} height={100} className='rounded-full w-16 h-16 ' />
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <p className='text-lg text-gray-500 font-medium'>{jobtitle}</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ReveiwCard
