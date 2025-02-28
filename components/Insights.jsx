'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/constants/motion'
import { styleClasses } from '@/constants/style'
import { TitleText } from './TitleText'
import { insightList } from '@/constants/data'
import InsightCard from './InsightCard'

const Insights = ({ isForm }) => {
    return (
        <motion.div variants={!isForm && staggerContainer} initial={!isForm && 'hidden'}
            whileInView={!isForm && 'show'} viewport={{ once: false, amount: 0.25 }}
            className={`${styleClasses.innerWidth} mx-auto flex flex-col`}>
            {!isForm &&
                <TitleText title={<>Our Fleet</>} />
            }
            <div className='mt-12 flex flex-col gap-9'>
                {insightList.map((insight,ind)=>(
                    <InsightCard key={ind} insight={insight} index={ind}/>
                ))}
            </div>
        </motion.div>
    )
}

export default Insights