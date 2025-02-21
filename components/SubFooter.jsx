import React from 'react'
import { MdCardTravel } from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'
import { IoCarSport } from 'react-icons/io5'

export const SubFooter = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 rounded-lg
     shadow-[0_2px_15px_-3px-rgba(0,0,0,0.07),0_10px_20px_-2px-rgba(0,0,0,0.04)] md:flex-row relative'>
            <img src='/images/c3.jpg' alt='sub footer img'
                className='h-96 w-full object-cover md:h-[60vh] lg:h-[80vh] 
                rounded-t-lg md:!rounded-lg' />
            <div className='flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8'>
                <div className='flex items-center gap-5'>
                    <span className='shadow-xl text-2xl p-6 rounded-full'>
                        <MdCardTravel className='text-third-color' />
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-2xl text-gray-900 font-bold'>
                            Wedding
                        </h5>
                        <p className='mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4'>
                            Seeking wedding tranportation service? Contact Us to costomize your special day! 
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='shadow-xl text-2xl p-6 rounded-full'>
                        <IoCarSport className='text-third-color' />
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-2xl text-gray-900 font-bold'>
                            Wedding
                        </h5>
                        <p className='mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4'>
                            Discover the perfect ride for an Event - What's your selction?
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='shadow-xl text-2xl p-6 rounded-full'>
                        <IoMdContacts className='text-third-color' />
                    </span>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-2xl text-gray-900 font-bold'>
                            Wedding
                        </h5>
                        <p className='mb-4 text-base text-gray-500 border-l-4 border-third-color pl-4'>
                           Discover unmatched luxury travel with Amahh in Melboun's finest experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
