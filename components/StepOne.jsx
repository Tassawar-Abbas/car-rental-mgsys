import React, { useMemo, useState } from 'react'
import { Form } from './ui/form'
import DateTimeForm from './DateTimeForm'
import SelectForm from './SelectForm'
import { pickupTime } from '@/constants/data'
import CitySelect from './CitySelect'
import { Country, State, City } from 'country-state-city';
import dynamic from 'next/dynamic'

const StepOne = ({ form }) => {
    const getCities = City.getCitiesOfState('PK', 'PB');
    const [getSource, setSource] = useState(null)
    const [getDestination, setDestination] = useState(null)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-[10%] my-10'>
            <Form {...form}>
                <form className='w-full bg-white p-5 shadow-md border gap-5'>
                    <DateTimeForm control={form.control} id='pickUpDate' label='Pickup Date' />
                    <SelectForm id='pickupTime' label='Pickup Time' placeholder='Set Pickup Time'
                        list={pickupTime} control={form.control} />

                    <CitySelect id='source' label='Source' placeholder='Select your pickup city'
                        list={getCities} control={form.control} setValue={setSource} />
                    <CitySelect id='destination' label='Destination' placeholder='Select your drop city'
                        list={getCities} control={form.control} setValue={setDestination} />

                    <SelectForm id='persons' label='Persons' placeholder='Select Persons'
                        list={[1, 2, 3, 4, 5, 6, 7]} control={form.control} />
                    <SelectForm id='transferType' label='Transfer Type' placeholder='Select Transfer Type'
                        list={['one way', 'return']} control={form.control} />
                </form>
            </Form>
            <div className='flex justify-start flex-col'>
                <img src='/images/map.jpg' alt='punjab map' className='w-full h-[500px] object-cover' />
            </div>
        </div>
    )
}

export default StepOne
