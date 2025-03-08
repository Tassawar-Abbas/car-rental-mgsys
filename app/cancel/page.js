import React from 'react'

const Cancel = () => {
  return (
    <div 
    className='flex flex-col w-[40%] mx-auto my-[15%] h-[20%] gap-5 py-3 px-5 items-center shadow-md rounded-md'>
      <h1 className='bg-red-500 text-white px-4 text-lg font-bold'>Failure</h1>
      <h3>Please try again. Something went wrong</h3>
    </div>
  )
}

export default Cancel