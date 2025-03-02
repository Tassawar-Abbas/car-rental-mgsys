import React from 'react'
import { Banner } from '@/components/Banner'
import { TitleText } from '@/components/TitleText'
import Feedback from '@/components/Feedback'
import { SubFooter } from '@/components/SubFooter'

const AboutUs = () => {
    return (
        <div>
            <Banner img='/images/s1.jpg' title='About Us' color={'white'}
                text='We are on all new chauffeured car service diriving Victoria' />
            <TitleText title={
                <span>
                    About Us
                </span>
            } textStyles="mt-16" />
           <Feedback/>
           <SubFooter/>
        </div>
    )
}

export default AboutUs