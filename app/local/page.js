import { Banner } from '@/components/Banner'
import { SubFooter } from '@/components/SubFooter';
import React from 'react'

const Local = () => {
  return (
    <div className='local-transfer'>
      <Banner img='/images/n1.jpg' title='Local Transfer' color={'white'}
        text='Add to the memories on your big day with Amahh' />
      <div className='max-w-[1150px] mx-4 lg:mx-auto my-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <h1 className='text-third-color text-4xl font-bold mb-10'>Local Car Services</h1>
            <p className='leading-6 text-lg text-slate-400'>
              At Amahh, we comprehend the meaning of vehicle administration for your big day.
              <br />
              <br />
              Our wedding vehicles are carefully ready for an immaculate appearance and we'll design
              your course to gurantee dependability. We understand the the importance of final details,
              so feel free to elighten us if you desire any extra, such as enhancement, to evalute your
              journy's delight.
              <br />
              <br />
              Customize your experience with us and make every ride truly exceptional.
            </p>
          </div>
          <img src='/images/n3.jpg' className='w-full h-full' alt='local images'/>
        </div>
        <h2 className='text-center text-md md:text-4xl text-slate-500 my-16'>
          Whether you seek lavish induglence or spacious versatility, our 
          versatile fleet ensures the ideal ride for every event.
        </h2>
      </div>
      <SubFooter/>
    </div>
  )
}
export default Local;
