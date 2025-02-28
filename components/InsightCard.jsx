import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/constants/motion'

const InsightCard = ({ insight, index }) => {
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
                </div>
                <p className='mt-4 font-normal lg:text-lg text-sm'>{insight?.subTitle}</p>
            </div>
        </motion.div>
    )
}

export default InsightCard