'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { textVariant2 } from '@/constants/motion'
export const TitleText = ({ title, textStyles }) => {
    return (
        <motion.h4 variants={textVariant2} initial='hidden' whileInView='show'
            className={`mt-2 text-third-color font-bold md:text-[50px] text-[25px] text-center ${textStyles}`}>
            {title}
        </motion.h4>
    )
}
