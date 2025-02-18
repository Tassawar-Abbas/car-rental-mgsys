import { styleClasses } from '@/app/constants/style'
import React from 'react'
import { TitleText } from './TitleText'
import { exploreWorlds } from '@/app/constants/data'
import { ExploreWorld } from './ExploreWorld'

export const Explore = () => {
    return (
        <section className='px-6 py-10'>
            <div className={`S{styleClasses.innerWidth} mx-auto flex flex-col`}>
                <TitleText title={
                    <span className='text-gray-900 font-bold'>
                        Why Ride With Us?
                    </span>
                } />
                <div className='my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32'>
                    {exploreWorlds.map((world, ind) => (
                        <ExploreWorld key={ind} world={world}  />
                    ))}
                </div>
            </div>
        </section>
    )
}
