import React from 'react'

export const ExploreWorld = ({world}) => {
    console.log(world,"world")
  return (
    <div className='w-full sm:mx-auto mt-16 shadow-xl text-gray-900 px-10 py-6 gradient-05 sm:p-8 
    rounded-lg border-third-color border-2 relative cursor-pointer hover:shadow-third-color text-center'>
        <div className='mx-auto w-32 h-32 relative -mt-[80px] border-4 border-white rounded-full overflow-hidden'>
            <img src={world.imgUrl} alt='images'
            className='object-cover object-center h-32'/>
        </div>
        <div className=''>
            <h2 className='text-xl font-bold text-third-color'>
                {world.title}
            </h2>
            <span className='text-gray-500 mt-6'>
                {world.description}
                </span>
        </div>
    </div>
  )
}
