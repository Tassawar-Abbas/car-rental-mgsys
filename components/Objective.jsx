import React from 'react'
import { TitleText } from './TitleText'
import { objectiveData } from '@/constants/data'

export const Objective = () => {
    return (
        <div className='bg-teal-50 pt-12 mb-10 pb-3'>
            <TitleText title={
                <span className='text-gray-900 font-bold'>Our Objective</span>
            } />
            <div className='mx-10 md:mx-[10%] mt-8'>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10'>
                    {objectiveData.map((obj, ind) => (
                        <div key={ind} className='rouded rou shadow-lg bg-white'>
                            <div className='w-full relative'>
                                <img src={obj.img} alt={obj.title} className='w-full object-cover' />
                            </div>
                            <div className='font-bold text-xl mb-2 text-third-color p-2'>
                                {obj.title}
                            </div>
                            <p className='text-gray-500 text-base p-2'>
                                {obj.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
