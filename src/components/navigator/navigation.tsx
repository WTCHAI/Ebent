'use client'

import React, { useState , useEffect } from 'react'

import { useLanguage } from '@/context/language'


import Link from 'next/link'

import { IoMdMenu } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";


type Props = {}

const keyWord = {'language': [ "ไทย" , "English" ] , 'signIn' : [ 'เข้าสู่ระบบ' , 'Log in' ] , 'signUp' : ['สมัครสมาชิก', 'Sign up']}

export default function Navigation({}: Props) {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(()=>{
        // check if user is logged in
        const profile = localStorage.getItem('profile')
        setIsLoggedin(profile ? true : false)
    })

    return (
        <section className='w-full'>
            <div className='flex flex-row w-full items-center justify-between py-[4vh] mobile:px-[3vw] text-gray-700 font-medium md:text-lg lg:text-xl   lg:px-[3vw] xl:px-[6vw] '>
                <>
                    <Link href="/">
                        Ebent logo
                    </Link>
                </>
                <ul className='flex flex-row gap-x-[2vw] lg:gap-x-[3vw] items-center '>
                    {/* responsive handle < sm */}
                    <li className='sm:flex md:hidden '>
                        <button
                            onClick={(e)=>{
                                e.preventDefault()
                                setCurrentLanguage(currentLanguage === 'th' ? 'en' : 'th')
                            }}
                        >   
                        <h1 className='hover:opacity-75'>
                            {currentLanguage === 'th' ? keyWord['language'][0] : keyWord['language'][1] }
                        </h1>
                        </button>
                    </li>  
                    <li className='sm:flex md:hidden '>
                        <span className=''>
                            <IoMdMenu/>
                        </span>
                    </li>  
                    {/* responsive handle < sm */}

                    <li className='mobile:hidden md:flex'>
                        <Link href='/marketplace'>
                            <h1 className='lg:text-xl md:text-base'>Marketplace</h1>
                        </Link>
                    </li>
                    <li className='mobile:hidden md:flex flex-row gap-x-[1vw]'> 
                        <Link href='/benefit'>
                            <h1 className='lg:text-xl md:text-base'>Organize</h1>
                        </Link>
                    </li>
                    <li className='mobile:hidden md:flex flex-row gap-x-[0.5vw]'>
                        <button
                            onClick={()=>{
                                setCurrentLanguage('th')
                            }}
                        >
                            <h1 className={`${currentLanguage === 'th' ? 'text-gray-700': 'text-gray-400 hover:text-gray-600 '} `}>
                                ไทย
                            </h1>
                        </button>
                        <p className='text-gray-400'>|</p>
                        <button
                            onClick={()=>{
                                setCurrentLanguage('en')
                            }}
                        >
                            <h1 className={`${currentLanguage === 'en' ? 'text-gray-700': 'text-gray-400'} hover:opacity-85`}>
                                English
                            </h1>
                        </button>
                    </li>
                    {
                        !isLoggedin &&
                        <li className='mobile:hidden md:flex gap-x-[1vw]'>
                            <Link href='/signup' className=''>
                                <h1 className='font-normal text-gray-700 border-solid border-2 border-gray-700 rounded-xl lg:px-[1.5vw] lg:py-[0.5vh] hover:border-gray-500 hover:text-gray-500'>
                                    {currentLanguage === 'th' ? keyWord['signUp'][0] : keyWord['signUp'][1]}
                                </h1>
                            </Link>
                            <Link href='/signin' className=''>
                                <h1 className='font-light text-white bg-gray-800 border-solid border-2 border-gray-800 rounded-xl lg:px-[1.5vw] lg:py-[0.5vh] sm: hover:opacity-85'>
                                    {currentLanguage === 'th' ? keyWord['signIn'][0] : keyWord['signIn'][1]}
                                </h1>
                            </Link>
                        </li>
                    }
                    { isLoggedin && 
                        <li className='mobile:hidden md:flex '>
                            <Link href='/wallet'>
                                <IoWalletOutline
                                className='text-3xl font-medium text-gray-700 hover:text-gray-500'
                                />
                            </Link>
                        </li>
                    }


                  
                </ul>

            </div>
        </section>
    )
}