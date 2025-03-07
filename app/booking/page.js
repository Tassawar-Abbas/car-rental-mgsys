'use client'
import StepOne from '@/components/StepOne'
import { bookingSteps } from '@/constants/data'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation' // ✅ Import this hook
import Insights from '@/components/Insights'
import Contact from '@/components/Contact'

const Booking = () => {
    const searchParams = useSearchParams(); // ✅ Use this hook
    const current = Number(searchParams.get('index')) || 1; // Unwrap the search params correctly
    const form = useForm();

    return (
        <div className='pt-5'>
            <div className='hidden lg:flex justify-center items-center mt-5 ml-20'>
                <div className='grid grid-cols-4 gap-5 mt-5 items-center w-[75%]'>
                    {bookingSteps.map((item, index) => (
                        <div key={index}>
                            <div className='flex items-center gap-5'>
                                <svg width="50" height="50" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="30"
                                        fill={current >= index + 1 ? '#26d4e0' : 'black'}
                                    />
                                    <path
                                        d="M35 50 L47 62 L65 35"
                                        fill="none"
                                        stroke={current >= index + 1 ? 'white' : '#26d4e0'}
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {index !== 3 && (
                                    <div className={`w-full h-0.5 ${current > index + 1 ? "bg-third-color" : "bg-black"} rounded`}></div>
                                )}
                            </div>
                            <p className='w-full font-roboto font-semibold text-sm uppercase my-2 text-slate-400'>
                                Step {index + 1}
                            </p>
                            <p className='w-full font-roboto font-semibold text-sm uppercase text-slate-400'>
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {current == 1 && <StepOne form={form} />}
            {current == 2 && <Insights isForm={true} form={form} />}
            {current == 3 && <Contact  form={form} />}

            <div className={`${current == 4 ? "hidden" : "flex"} justify-between items-center mx-10 py-3`}>
                <button className='bg-sky-950 text-white px-10 py-3 rounded-full'>Back</button>
                <Link href={`/booking?index=${current + 1}`} className='bg-third-color text-white px-10 py-3 rounded-full'>
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Booking
