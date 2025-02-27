import { Banner } from '@/components/Banner'
import Service from '@/components/Service'
import { SubFooter } from '@/components/SubFooter'
import { servicesData } from '@/constants/data'
import React from 'react'

const Services = () => {
    return (
        <div className='our-services'>
            <Banner img='/images/n3.jpg' title='Services'
                text='Experience elevated travel with Amahh, where style, comfort and safety meet
                for every ocassion.' color={`white`} />
            <div className='mb-7'>
                {servicesData.map((service, ind) => (
                    <div key={ind}>
                        <Service service={service} />
                    </div>
                ))}
            </div>
            <SubFooter />
        </div>
    )
}

export default Services