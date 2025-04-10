import Image from 'next/image'
import React from 'react'
import CertCard from './CertCard'




interface CertificateProps {
    setPlayState: (state: boolean) => void;
}

const Certificate: React.FC<CertificateProps> = ({ setPlayState }) => {
    return (
        <div className=''>
            <div className='pt-16 pb-16 '>
                <div className=' w-[90%] rounded-lg mx-auto p-4 bg-white shadow-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-8 w-[95%] gap-10 mx-auto'>
                        <div className='flex flex-col gap-4 max-w-[500px]'>
                            <h1 className='text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold'>
                                Earn a business certificate to stand out in your field

                            </h1>
                            <p>
                                Earn a recognized certificate upon completion and prove your business credentials on your resume
                            </p>
                        </div>

                        <div className='pt-9'>
                            <Image src="/cert.jpg" alt='image' width={500} height={200} />
                        </div>
                    </div>
                </div>

                <div className='bg-black'>
                    <div className='pt-16 pb-16'>
                        <div >
                            <p className='text-2xl text-gray-200 text-center'>Our Mission</p>
                            <h1 className='text-3xl  md:text-4xl lg:text-5xl text-white text-center pt-4'>We&apos;re Challenging the Traditional <br /> MBA Education System</h1>

                        </div>

                        <div className='flex flex-col md:flex-row gap-10 items-center justify-center mt-24 w-[95%] mx-auto'>
                            <div className='bg-[rgba(114,113,113,0.2)] text-gray-300 rounded-2xl'>
                                <CertCard title='The Augment MBA' iconType='cancel' features={['$100,000 tutiion, on average', 'Inflexible learning', 'No refund Policy', 'Two-year time commitment', 'Taught by academics', 'Outdated curriculum', 'Tedious admissions process']} />
                            </div>

                            <div className='bg-gray-200 text-gray-900 rounded-2xl'>
                                <CertCard title='The Augment MBA' iconType='check' features={['$100,000 tutiion, on average', 'Inflexible learning', 'No refund Policy', 'Two-year time commitment', 'Taught by academics', 'Outdated curriculum', 'Tedious admissions process']} />
                            </div>

                        </div>

                    </div>

                </div>


                <div>
                    <div className='pt-16 pb-16'>
                        <div className='w-[90%] mx-auto text-center'>
                            <p className='text-2xl text-gray-700 text-center'>Simple class</p>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl  font-sans'>
                                Get strated with <strong>Chris Barton, <br /> </strong> Founder of <strong>Shazam</strong>

                            </h1>
                            <div className='relative w-[300px]  md:w-[600px]  lg:w-[800px] h-[300px] md:h-[500px] mx-auto pt-16'>
                                <Image
                                    src="/about.png"
                                    alt=""
                                    className='rounded-2xl w-full h-full object-cover'
                                    width={1000}
                                    height={500}
                                />
                                <Image
                                    src="/play-icon.png"
                                    alt=""
                                    width={100}
                                    height={100}
                                    onClick={() => { setPlayState(true) }}
                                    className='w-[50px] h-[50px] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] cursor-pointer'
                                />
                            </div>


                            <button className=' items-center gap-0.5  border border-gray-800 text-black  bg-lime-300 py-2  md:py-3 lg:py-4  text-[12px] font-semibold md:px-8 lg:px-28 px-4 rounded-4xl hover:bg-lime-900 transition-all duration-200  ml-10 mt-10'>
                                Discover All Programms

                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Certificate
