import { Banner } from '@/components/Banner'
import Insights from '@/components/Insights'
import React from 'react'

const Ourfleet = () => {
    return (
        <div>
            <Banner img='/images/m1.jpg' title='Our Fleet'
                text="Whether your're after our pure luxury or a high capacity transporter, we have
                a vehicle for every occasion " color={`white`} />
            <div className='relative'>
                <Insights isForm={false} />
            </div>
        </div>
    )
}

export default Ourfleet