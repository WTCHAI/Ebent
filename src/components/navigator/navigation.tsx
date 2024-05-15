'use client'

import React, { useState , useEffect } from 'react'

import { useLanguage } from '@/context/language'

import Link from 'next/link'

import { Input } from 'antd';

import { IoMdMenu } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoIosWallet } from "react-icons/io";


type Props = {}

const keyWord = {'language': [ "ไทย" , "English" ] , 'signIn' : [ 'เข้าสู่ระบบ' , 'Log in' ] , 'signUp' : ['สมัครสมาชิก', 'Sign up']}

export default function Navigation({}: Props) {
    const { currentLanguage, setCurrentLanguage } = useLanguage();

    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(()=>{
        // check if user is logged in
        const profile = sessionStorage.getItem('profile')
        setIsLoggedin(profile ? true : false)
    })

    return (
        <header className='flex flex-col w-full py-[4vh] gap-y-[2vh]'>
            <div className='flex flex-row w-full items-center justify-between mobile:px-[3vw] text-gray-700 font-medium md:text-lg lg:text-xl sm:px-[5vw] xl:px-[6vw] '>
                <ul className='flex flex-row gap-x-[2vw] items-center'>
                    <li>
                        <Link href='/'>
                            <h1 className='font-bold text-2xl text-gray-600 hover:text-gray-700'>
                                Ebent
                            </h1>
                        </Link>
                    </li>
                    <li className='mobile:hidden lg:flex '>
                        <Input
                            prefix={<FiSearch className=''/>}
                            placeholder="Search"
                            className="w-[20vw] border-2 rounded-full text-base pr-[1.5vw] font-light gap-x-[0.5vw] border-gray-300 focus:border-gray-500 hover:border-gray-500"
                            />
                    </li>
                </ul>

                <div className='flex flex-row lg:gap-x-[3vw] items-center '>
                    {/* responsive handle < md */}
                    <ul className='mobile:flex md:hidden flex-row items-center gap-x-[2vw] '>
                        <li className=' '>
                            <button
                                onClick={(e)=>{
                                    e.preventDefault()
                                    setCurrentLanguage(currentLanguage === 'th' ? 'en' : 'th')
                                }}
                            >   
                            <h1 className='hover:opacity-75 text-lg'>
                                {currentLanguage === 'th' ? keyWord['language'][0] : keyWord['language'][1] }
                            </h1>
                            </button>
                        </li>  
                        <li className=' '>
                            <span className='text-3xl'>
                                <IoMdMenu/>
                            </span>
                        </li>                          
                    </ul>
                    {/* responsive handle > md */}
                    <ul className='mobile:hidden md:flex items-center md:text-base gap-x-[2vw]'>
                        <li className=''>
                            <Link href='/marketplace'>
                                <h1 className='lg:text-xl md:text-base text-gray-600 font-semibold hover:text-gray-800'>Marketplace</h1>
                            </Link>
                        </li>
                        <li className='flex flex-row gap-x-[1vw]'> 
                            <Link href='/benefit'>
                                <h1 className='lg:text-xl md:text-base  text-gray-600 font-semibold hover:text-gray-800'>Organize</h1>
                            </Link>
                        </li>
                        <li className='mobile:hidden md:flex flex-row gap-x-[0.5vw]'>
                            <button
                                onClick={()=>{
                                    setCurrentLanguage('th')
                                }}
                            >
                                <h1 className={`${currentLanguage === 'th' ? 'text-gray-600': 'text-gray-400 hover:text-gray-600 '} font-semibold`}>
                                    {currentLanguage === 'th' ? keyWord['language'][0] : keyWord['language'][1]}
                                </h1>
                            </button>
                        </li>
                        {
                            !isLoggedin &&
                            <li className='mobile:hidden md:flex gap-x-[1vw]'>
                                <Link href='/signin' className=''>
                                    <h1 className='lg:text-lg md:text-base text-white font-medium bg-gray-600 border-solid border-2 border-gray-700 rounded-xl px-[1.5vw] py-[0.5vh] hover:bg-gray-700'>
                                        {currentLanguage === 'th' ? keyWord['signIn'][0] : keyWord['signIn'][1]}
                                    </h1>
                                </Link>
                            </li>
                        }
                        { isLoggedin && 
                            <li className='mobile:hidden md:flex '>
                                <Link href='/wallet'>
                                    <IoIosWallet
                                        className='text-3xl font-medium text-gray-600 hover:text-red-800'
                                    />
                                </Link>
                            </li>
                        }                        
                    </ul>
                </div>
            </div>
            <div className='mobile:flex lg:hidden mobile:px-[3vw] sm:px-[5vw]'>
                <Input
                    prefix={<FiSearch className='text-lg'/>}
                    className="w-full border-2 rounded-full text-base pr-[1.5vw] font-light gap-x-[0.5vw] border-gray-300 focus:border-gray-500 hover:border-gray-500"
                    placeholder='Search'
                />
            </div>
        </header>
    )
}