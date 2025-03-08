import React, { useMemo, useState } from 'react'
import { Form } from './ui/form'
import DateTimeForm from './DateTimeForm'
import SelectForm from './SelectForm'
import { pickupTime } from '@/constants/data'
import CitySelect from './CitySelect'
import { City } from 'country-state-city';
import InputForm from './InputForm'

const Contact = ({ form }) => {
    return (
        <div className='grid grid-cols-1 gap-5 mx-10 md:mx-[10%] my-10'>
            <Form {...form}>
                <form className='w-full bg-white p-5 shadow-md border gap-5'>
                    <div className='flex flex-wrap'>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <InputForm control={form.control} id='firstName' label='First Name'
                                placeholder='Enter your first name' type='text' />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <InputForm control={form.control} id='lastName' label='Last Name'
                                placeholder='Enter your last name' type='text' />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <InputForm control={form.control} id='email' label='Email'
                                placeholder='Enter your Email' type='email' />
                        </div>
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                            <InputForm control={form.control} id='phoneNumber' label='Phone Number'
                                placeholder='Enter your phone number' type='number' />
                        </div>
                        <div className='w-full px-3 mb-6 md:mb-0'>
                            <InputForm control={form.control} id='comment' label='Comment'
                                placeholder='Enter a comment' type='text' />
                        </div>
                    </div>
                </form>
            </Form>

        </div>
    )
}

export default Contact