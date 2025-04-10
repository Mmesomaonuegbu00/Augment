import React from 'react'
import Image from 'next/image'

interface HeroCardprops {
    image: string;
    // title: string;
    // company: string;
    // description: string;
    className?: string;
}

const HeroCard: React.FC<HeroCardprops> = ({ image, className }) => {
    return (
        <div className={`relative w-[400px] h-[300px] sm:h-[500px] lg:h-[600px] xl:h-[700px]  hover:w-[700px] ${className}`}>
          
            <Image
                src={image}
                alt="Description of the image"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="rounded-lg object-cover "
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>

            {/* <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-sans font-medium">{title}</h1>
                <hr className='text-white h-[5px]'/>
                <p className="text-white text-sm sm:text-xl font-sans ">{company}</p>
                <p className="text-white text-lg sm:text-2xl font-sans font-medium">{description}</p>
            </div> */}
        </div>
    );
}

export default HeroCard
