import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'


interface CertCardProps {

    title: string

    features: string[]
    iconType?: 'check' | 'cancel'
}



const CertCard: React.FC<CertCardProps> = ({ title, features, iconType }) => {
    return (
        <div className='p-12 rounded-xl w-full lg:w-[550px] mx-auto'>
            <h3 className='mt-8 text-xl md:text-3xl lg:text-4xl text-center'>{title}</h3>


            <hr className='mt-10 pb-2 text-gray-300' />

            <div className='mt-4'>
                <div className='text-center mb-4'>
                    <ul className="space-y-2 text-center">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3 text-xl font-sans border-b pb-6 pt-2">
                                <div className='w-6 h-6  rounded-full flex justify-center items-center'>
                                    {iconType === 'cancel' ? (
                                        <FaTimes className='text-gray-500' />
                                    ) : (
                                        <FaCheck className='text-lime-300' />
                                    )}
                                </div>
                                <span>{feature}</span>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>


        </div>
    )
}

export default CertCard