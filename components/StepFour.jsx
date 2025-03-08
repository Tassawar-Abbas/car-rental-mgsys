'use client'
import { getDistance } from '@/lib/distance';
import paymentMethod from '@/lib/stripe';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const StepFour = ({ form }) => {
    console.log(form.getValues())
    const router=useRouter();
    const [price, setPrice] = useState(0);

    const { transferType, title, subTitle, source, pickupTime, pickUpDate, phoneNumber,
        persons, lastName, imgUrl, firstName, email, destination, comment
    } = form.getValues();
    useEffect(() => {
        if (source?.length && destination?.length) {
            const sourceVal = source.split(',')
            const destinantionVal = destination.split(',')
            const distanceInKM = getDistance(
                parseFloat(sourceVal[0]),
                parseFloat(sourceVal[1]),
                parseFloat(destinantionVal[0]),
                parseFloat(destinantionVal[1]),
            )
            const finalPrice = transferType == 'one way' ? parseInt(distanceInKM) : 2 * parseInt(distanceInKM)
            setPrice(finalPrice)
        }
    }, [])
    const goToPayment = async () => {
        const data={...form.getValues(),price}
        console.log(data,"datadata")
        const url =await paymentMethod(data);
        router.push(url)
    }
    return (
        <div className='max-w-[1150px] mx-auto'>
            <div className='grid grid-cols-1 p-4 mt-10'>
                <div className='relative w-full mb-4 rounded overflow-hidden'>
                    <img src={imgUrl} className='object-cover' alt='selected vehicle' />
                </div>
                <div className='pt-8'>
                    <div className='flex justify-between items-center border-b mb-5 pb-5'>

                        <h3 className='text-3xl font-bold'>
                            {title}
                        </h3>
                        <p className='text-lg font-bold'>
                            Price: ${price}
                        </p>
                    </div>
                    <h3 className='text-2xl font-bold mb-5'>
                        Order Information
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 bg-slate-50 p-5 rounded-lg mb-8'>
                        <div className='flex justify-between p-2'>
                            <span className='font-bold'>First Name</span>
                            <span>{firstName}</span>
                        </div>
                        <div className='flex justify-between p-2'>
                            <span className='font-bold'>Last Name</span>
                            <span>{lastName}</span>
                        </div>
                        <div className='flex justify-between p-2'>
                            <span className='font-bold'>Email</span>
                            <span>{email}</span>
                        </div>

                        <div className='flex justify-between p-2'>
                            <span className='font-bold'>Phone Number</span>
                            <span>{phoneNumber}</span>
                        </div>
                        <div className='flex justify-between p-2'>
                            <span className='font-bold'>Comment</span>
                            <span>{comment}</span>
                        </div>
                    </div>
                    <button onClick={goToPayment} className='bg-third-color text-white font-bold py-2.5 px-4 ml-[85%] w-[10%] rounded-md'>
                        Pay Now
                    </button>

                </div>
            </div>
        </div>
    )
}

export default StepFour