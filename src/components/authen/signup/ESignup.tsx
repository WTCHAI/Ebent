'use client'

import React from 'react'

import * as z from 'zod'
import { useForm , Controller} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ESignupFormSchema , ESignupFormType } from '@/schema/EsignUpForm';
 
import { ESignupStatus } from '@/interface/authen/EsignUpStatus';
import { ESignUpAuth } from '@/firebase/signUp/ESignUp';

import { useRouter } from 'next/navigation';
import Link from 'next/link'

import { Input } from 'antd';

import { SiEventbrite } from "react-icons/si";


type Props = {}


export default function ESignUp({}: Props) {
    //router redirect to sign in page
    const router = useRouter()

    //form validation
    const { register, handleSubmit , control ,formState: { errors } , } = useForm<ESignupFormType>({ resolver : zodResolver(ESignupFormSchema) })

    //form value and status handler
    const onSubmit = async (data: ESignupFormType) => {
        console.log(data)
        const response : ESignupStatus = await ESignUpAuth(data)
        if (response.status === 200) {
        //   router.push('/')
    
        }else if (response.status === 404) {
          alert(response.message)
        }
      }

    return (
        <div className='flex items-center justify-center w-full h-full text-gray-500  '>
        <div
            className='flex flex-col items-center justify-center  gap-y-[3vh] px-[5vw] py-[5vh] w-[40vw] h-fit transition-all rounded-2xl border border-gray-800 hover:shadow-xl'
        >  
            <span className='flex flex-col items-center justify-center w-full gap-y-[3vh]'>
                <h1 className='text-4xl text-gray-700 tracking-tight leading-tight'>
                    Explore with Us !
                </h1>
                <SiEventbrite className='text-2xl text-primaryBlue'/>
            </span>
            <form  
                className='flex flex-col justiy-center gap-y-[3vh] w-full'
                onSubmit={
                    handleSubmit(async (data)=>{
                        onSubmit(data)
                    })
                }
            >
            <div className='flex flex-col items-center justify-center gap-y-[1vh]'>
                <h1 className='text-2xl text-gray-700 tracking-tight leading-tight'>Creating Account</h1>
                <span className='flex flex-row gap-x-[0.5vw] items-center font-light'>
                    <p className='text-abse'>Already have an account?</p>
                    <Link href="/signin">
                        <p className='text-blue-500 hover:underline hover:text-primaryBlue'>
                            Log in
                        </p>
                    </Link>            
                </span>
            </div>

            <div className='w-full'>
                <h1 className='tracking-tight leading-tight font-normal text-base mb-[1vh]'>
                    What should we call you ?
                </h1>
                <Controller
                    {...register('name')}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            placeholder='Enter your name'
                            className='w-full p-2 border border-gray-500 rounded-md' 
                        />
                    )}  
                />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
            </div>

            <div>
                <h1 className='tracking-tight leading-tight font-normal text-base mb-[1vh]'>
                What&apos;s your email ?
                </h1>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                        {...field}
                        placeholder='Enter your email'
                        className='w-full p-2 border border-gray-500 rounded-md'
                        />
                    )}  
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
            </div>
            <div>
                <div>
                    <h1 className='tracking-tight leading-tight font-normal text-base mb-[1vh]'>
                        Create a password
                    </h1>            
                </div>
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input.Password
                        {...field}
                        placeholder='Enter your password'
                        className='w-full p-2 border border-gray-500 rounded-md'
                        />
                    )}  
                />
                {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
            </div>
            <button
                className='w-full bg-gray-800 hover:opacity-85 shadow-sm hover:shadow-md py-[1vh] rounded-3xl cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50'
                type='submit'
            >
                <p className='text-white'>
                Create an account
                </p>
            </button>
            </form> 
        </div>      
        </div>
    )
}