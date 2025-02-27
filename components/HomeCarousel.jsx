'use client'
import { carouselData } from '@/constants/data'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Slice } from 'lucide-react'


export default function HomeCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    return (
        <div>
            <Carousel plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {carouselData.map((item, ind) => (
                        <CarouselItem style={{ backgroundImage: `url(${item.img})` }}
                            className='w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none' key={ind}>
                            <div>
                                <Card className='bg-transparent border-none'>

                                    <CardContent className='flex items-center justify-center p-6'>
                                        <div className='h-[40vh] md:h-[60vh] flex lg:justify-center items-center flex-col relative'>
                                            <h3 className="mb-1 lg:mb5 flex items-center gap-6 text-2xl lg:text-5xl"></h3>
                                            <span className='font-bold text-third-color transition-[3s]'>{item.title}</span>
                                            <p className="text-white text-sm md:text-4xl text-center w-10/12 md:w-8/12">
                                                {item.text}
                                            </p>
                                        </div>
                                    </CardContent>

                                </Card>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='left-0 md:left-12' />
                <CarouselNext className='right-0 md:right-12' />
            </Carousel>
        </div>
    )
}
