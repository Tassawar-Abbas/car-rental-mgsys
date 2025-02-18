'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { headerLinks } from '../app/constants/data'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false)
    return (
        <header className='bg-white shadow-lg h-16 flex justify-between items-center md:px-[5%]' >
            <Link href='/' className='text-third-color font-bold text-2xl pl-3 md:pl-0'>Amahh Car Rental</Link>
            <div className='md:hidden flex flex-col gap-1 pr-3 md:pr-0' onClick={() => setShowMenu(!showMenu)}>
                <div className='w-5 h-0.5 bg-black'></div>
                <div className='w-5 h-0.5 bg-black'></div>
                <div className='w-5 h-0.5 bg-black'></div>
            </div>
            <div className={`${showMenu?"flex flex-col absolute top-16 w-full":"hidden md:flex"} gap-5  md:flex-row md:static md:w-auto bg-white text-center`}>
                {headerLinks.map((hLink) => (
                    <div key={hLink.link}>
                        <Link href={hLink.link} exact={`${hLink.exact}`}
                            className={`${pathname == hLink.link ? 'text-third-color' : 'text-gray-500'}`}>
                            <span>{hLink.text}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </header>
    )
}

export default Header