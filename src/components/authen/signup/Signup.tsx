'use client'
import React, { useState } from 'react'

import Link from 'next/link'

import { Divider } from 'antd';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

type Props = {}

export default function SignUp({}: Props) {
  return (
    <div className='flex items-center justify-center w-full h-full text-gray-500  '>
      <div
        className='flex flex-col items-center justify-center  gap-y-[3vh] px-[5vw] py-[5vh] w-[40vw] h-fit transition-all rounded-2xl border border-gray-800 hover:shadow-xl'
      >
        <span className='flex flex-col items-center justify-center w-full gap-y-[1vh]'>
          <h1 className='text-4xl text-gray-700 font-medium '>
            Explore with Us !
          </h1>
          <h2>
            Join us and start your journey
          </h2>
          <span className='p-4 bg-gray-300 rounded-full mt-[1vh]'>

          </span>
        </span>
        <div
          className='w-full'
        >
          <div className='flex flex-col items-center justify-center gap-y-[1vh]'>
            <button
              className='flex w-full border-2 border-solid hover:border-gray-500 border-gray-600 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
              >
              <FcGoogle className='text-2xl'/>
              <p className='flex flex-row text-base text-gray-700 '>
                Sign up with Google
              </p>
            </button>
            <button
              className='flex w-full border-2 border-solid hover:border-gray-500 border-gray-600 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
            >
              <span className='bg-black rounded-full items-center justify-center p-[0.2rem]'>
                <FaApple className=' text-xl text-white'/>
              </span>

              <p className='flex flex-row text-base text-gray-700 '>
                Sign up with Apple
              </p>
            </button>
            <button
              className='flex w-full border-2 border-solid hover:border-gray-500 border-gray-600 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
              >
              <FaGithub className='text-2xl text-black'/>
              <p className='flex flex-row text-base text-gray-700 '>
                Sign up with Github
              </p>
            </button>  
            <Divider
              style={{
                color: '#9CA3AF',
                fontSize: '1rem',
                fontWeight: '400',
                margin : '0.7rem 0 0.7rem 0'
              }}
            >
              Or
            </Divider>    
            <Link href='/ep-signup'
              className='flex w-full border-2 border-solid hover:bg-gray-700 hover:border-gray-700 bg-gray-800  border-gray-800 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
            >
              <p className='flex flex-row text-base text-gray-50 '>
                Sign up with Email or Phone
              </p>
            </Link>                   
          </div>
          
        </div>  
        <div className='flex flex-row items-center justify-center gap-x-[0.5vw]'>
          <p className='mobile:text-sm sm:text-base text-gray-700 '>
            Already have an account?
          </p>
          <Link href='/signin'>          
              <p className='flex flex-row text-base text-gray-700 underline hover:text-gray-600'>
                Log in
              </p>
          </Link> 
        </div>        
      </div>

    </div>
  )
}