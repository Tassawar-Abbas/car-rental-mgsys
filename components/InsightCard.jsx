import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/constants/motion'
import { useRouter, useSearchParams } from 'next/navigation'

const InsightCard = ({ insight, index, isForm, form }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const option = searchParams.get('option')
    const selectVehicle=()=>{
        form.setValue('imgUrl',insight?.imgUrl)
        form.setValue('title',insight?.title)
        form.setValue('subTitle',insight?.subTitle)
        router.push(`/booking?index=2&option=${index}`)
    }
    return (
        <motion.div variants={fadeIn('up', 'string', index * 0.5, 1)}
            className='flex justify-center md:flex-row flex-col gap-4'>
            <img src={insight?.imgUrl} alt='insight images'
                className='md:w-[350px] w-full h-[250px] rounded-[32px] object-cover' />
            <div>
                <div>
                    <h4 className='font-extrabold text-slate-500 lg:text-[42px] text-[26px]'>
                        {insight?.title}
                    </h4>
                    {isForm &&
                        <button className={`${option == index ? 'bg-third-color text-white' : 'bg-cyan-600 text-white'} px-6 py-2  font-semibold rounded-sm`}
                            onClick={selectVehicle}
                            disabled={option == index ? true : false}>
                            Select
                        </button>
                    }
                </div>
                <p className='mt-4 font-normal lg:text-lg text-sm'>{insight?.subTitle}</p>
            </div>
        </motion.div>
    )
}

export default InsightCard