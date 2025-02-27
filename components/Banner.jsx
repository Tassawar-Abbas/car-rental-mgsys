import React from 'react'

export const Banner = ({ img, title, text,color, backgroundColor = '#f5f5f5' }) => {
  return (
    <div>
      <div className="h-[30vh] lg:h-[70vh] bg-no-repeat bg-center relative flex justify-center items-center w-full"
        style={{ backgroundImage: `url(${img})`, backgroundColor,backgroundSize:'cover' }}>
        <div className='content-[] top-0 right-0 absolute bottom-0 left-0 bg-[rgba(0,0,0,0.2)] bg-black opacity-40'></div>
        <div className='w-full lg:w-[70%] text-white'>
          <h1 className='text-2xl lg:text-7xl font-medium text-third-color mb-2 lg:mb-5'>
            {title}
          </h1>
          <h2 className='text-lg md:text-4xl leading-6 md:leading-[55px]' style={{color:color}}>
            {text}
          </h2>
        </div>
      </div>
    </div>
  )
}
