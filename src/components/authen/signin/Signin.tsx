'use client'
import React from 'react'

import { useForm , SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod'
import { ESigninSchema } from '@/schemas/authen';

import { EsingIn } from '@/utils/actions/authentication/Esignin';
import { GoogleSignIn } from '@/utils/actions/authentication/google';


import Link from 'next/link'
import { useRouter } from 'next/navigation';

import { Divider, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaGithub } from 'react-icons/fa'

type Props = {}

function isValidEmail(email: string): boolean {
  // Regular expression for validating an email
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password: string): boolean {
  // Regular expression for validating a password
  const passwordRegex: RegExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}

export default function Signin({}: Props) {
  const router = useRouter()
  const form = useForm<z.infer<typeof ESigninSchema>>({
    resolver: zodResolver(ESigninSchema),
    defaultValues : {
      email: '',
      password: ''
    },
  })  

  const onFormSubmit : SubmitHandler<z.infer<typeof ESigninSchema>> = async (data) => {
    if (!isValidEmail(data.email)) {
      form.setError('email', {message : "Please enter a valid email."})
    }
    if (!isValidPassword(data.password)) {
      form.setError('password', {message : "Password should be at least 8 characters long."})
    }
    if (isValidEmail(data.email) && isValidPassword(data.password)) {
      const response = await EsingIn(data)
      if (response.status === 200){
        // alert(response.message)
        if (response.payload){
          sessionStorage.setItem('profile', JSON.stringify(response.payload) ?? '' )
        }
        router.push('/')
      }else {
        alert(response.message)
      }
    }
  }

  return (
    <main className='flex items-center justify-center w-full h-full text-gray-500'>
      <div className='flex flex-col items-center justify-center  gap-y-[3vh] px-[5vw] py-[5vh] w-[40vw] h-fit transition-all rounded-2xl border border-gray-800 hover:shadow-xl'>
        <span className='flex flex-col items-center justify-center w-full gap-y-[3vh]'>
          <h1 className='text-4xl text-gray-700 tracking-tight leading-tight'>
            Explore with us!
          </h1>
          <span className='rounded-full bg-gray-200 p-5'>
            
          </span>
        </span>
        <form
          className='flex flex-col justiy-center gap-y-[2vh] w-full'
          onSubmit={
            form.handleSubmit(onFormSubmit)
          }  
        >   
          <div>
            <h1 className='tracking-tight leading-tight font-normal text-base mb-[1vh]'>
              What&apos;s your email ?
            </h1>
            <Input
                type='email'
                {...form.register('email')}
                onChange={(e : React.ChangeEvent<HTMLInputElement> )=>{
                  const targetInput = e.target.value.trim()
                  form.setValue('email',targetInput)                
                }} 
                placeholder='Enter your email'
                className='w-full p-2 border border-gray-500 rounded-md'
            />            
          </div>
          <div>
            <h1 className='tracking-tight leading-tight font-normal text-base'>
              What&apos;s your password ?
            </h1>
            <Input.Password
                type='password'
                {...form.register('password')}
                onChange={(e : React.ChangeEvent<HTMLInputElement> )=>{
                  const targetInput = e.target.value.trim()
                  form.setValue('password',targetInput)                
                }}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                placeholder='Enter your password'
                className='w-full p-2 border border-gray-500 rounded-md'
            />            
          </div>
          <Divider
                style={{
                    color: '#9CA3AF',
                    fontSize: '1rem',
                    fontWeight: '400',
                    margin : '0.5rem 0 0.5rem 0'
                }}
          >
            Or
          </Divider>
          <button
            className='flex w-full border-2 border-solid hover:border-gray-500 border-gray-600 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
            onClick={async (e)=>{
              e.preventDefault()
              GoogleSignIn()
            }}
          >
            <FcGoogle className='text-2xl'/>
            <p className='flex flex-row text-base text-gray-700 '>
              Sign in with Google
            </p>
          </button>
          <button
            className='flex w-full border-2 border-solid hover:border-gray-500 border-gray-600 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
            >
            <span className='bg-black rounded-full items-center justify-center p-[0.2rem]'>
              <FaApple className=' text-xl text-white'/>
            </span>

            <p className='flex flex-row text-base text-gray-700 '>
              Sign in with Apple
            </p>
          </button>
          <button
            className='flex w-full border-2 border-solid hover:border-gray-500 border-gray-600 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
          >
            <FaGithub className='text-2xl text-black'/>
            <p className='flex flex-row text-base text-gray-700 '>
              Sign in with Github
            </p>
          </button> 
          <button
            type='submit'
            className='w-full p-2 bg-gray-700 hover:opacity-90 hover:shadow-lg text-white rounded-md'
          >
            Sign in
          </button>
        </form>
        <span className='flex flex-row items-center justify-center w-full gap-x-[1vw]'>
          <p>
            Don&apos;t have an account ?
          </p>
          <Link
            href='/signup'
            className='text-blue-500 ho9ver:underline'
          >
            Sign up
          </Link>
        </span>
      </div>
    </main>
  )
}