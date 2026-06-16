import React from 'react'

const Featured = () => {
    return (
        <div className='bg-black'>
            <div className='pt-10 rounded-lg p-6  lg:p-16 '>
                <div className='bg-[rgba(114,113,113,0.2)] w-[95%]  h-full  pt-10 rounded-2xl flex flex-col items-center mx-auto pb-16'>
                    <p className='text-base font-sans mb-6 text-gray-400 text-center'>
                        Featured in
                    </p>

                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        <p className='text-2xl font-tech font-bold md:text-3xl lg:text-4xl text-white'>
                            TechCrunch
                        </p>
                        <p className='text-2xl md:text-3xl lg:text-4xl font-forbes font-semibold text-white'>
                            Forbes
                        </p>
                        <p className='text-2xl font-bloomberg md:text-3xl lg:text-4xl font-semibold text-white'>
                            Bloomberg
                        </p>
                        
                    </div>

                    <p className='text-[22px] font-sans mt-6 text-gray-100 text-center max-w-[800px] pt-6 px-4'>
                        &quot;Augment pitches a new kind of MBA, one that’s more like a startup accelerator than a traditional business school.&quot; <br />
                        <span className='text-gray-400 font-sans'>- TechCrunch</span>
                    </p>

                </div>
            </div>
        </div>

    )
}

export default Featured
