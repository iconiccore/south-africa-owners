'use client'

import Link from "next/link";
import LogoImage from "@/public/images/logo.svg";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return <>
        <header className='px-4 py-8 sm:py-0 sm:px-0'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className='w-[100px]'>
                        <Link href='/'>
                            <Image src={LogoImage} alt='logo' />
                        </Link>
                    </div>

                    <div>
                        <button className='block sm:hidden' onClick={() => setIsOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                            </svg>
                        </button>
                    </div>

                    <div className={`fixed w-3/4 h-screen bg-white top-0 right-0 z-10 shadow-xl flex items-center justify-center transition-all ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <button className='absolute right-8 top-8 p-4' onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                        <ul className='flex items-center justify-center gap-4 my-4 flex-col'>
                            <li>
                                <Link href='/#services' onClick={() => setIsOpen(false)} className='font-medium px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-primary transition-colors ease-in-out block'>Our Services</Link>
                            </li>
                            <li>
                                <Link href='/#process' onClick={() => setIsOpen(false)} className='font-medium px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-primary transition-colors ease-in-out block'>Process</Link>
                            </li>
                            <li>
                                <Link href='/#request' onClick={() => setIsOpen(false)} className='font-medium px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-primary transition-colors ease-in-out block'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='hidden sm:block'>
                        <ul className='flex items-center justify-center gap-4 my-4'>
                            <li>
                                <Link href='/#services' className='font-medium px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-primary transition-colors ease-in-out block'>Our Services</Link>
                            </li>
                            <li>
                                <Link href='/#process' className='font-medium px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-primary transition-colors ease-in-out block'>Process</Link>
                            </li>
                            <li>
                                <Link href='/#request' className='font-medium px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-primary transition-colors ease-in-out block'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
}
export default Header
