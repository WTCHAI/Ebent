'use client'
import React from 'react'

import { useForm , Controller} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SigninFormSchema , SigninFormType } from '@/schema/authForm/signinForm'

import { EsignIn } from '@/firebase/auth/signIn/EsignIn'  
import { GoogleSignIn } from '@/firebase/auth/signIn/GoogleSignIn'

import { SigninStatus } from '@/interface/authen/SignInStatus'

import Link from 'next/link'
import { useRouter } from 'next/navigation';

import { Divider, Input } from 'antd'
import { FcGoogle } from 'react-icons/fc'
import { FaApple, FaGithub } from 'react-icons/fa'
import { SiEventbrite } from 'react-icons/si'

type Props = {}

export default function Signin({}: Props) {
  const { register, handleSubmit , control ,formState: { errors } , } = useForm<SigninFormType>({ resolver : zodResolver(SigninFormSchema) })

  const router = useRouter()
  const onSubmit = async (data: SigninFormType) => {
    // console.log(data)
    const response : SigninStatus = await EsignIn(data.email, data.password)
    if (response.status === 200) {
      sessionStorage.setItem('profile', JSON.stringify(response.payload))
      router.push('/')

    }else if (response.status === 404) {
      alert(response.message)
    }
  }

  return (
    <main className='flex items-center justify-center w-full h-full text-gray-500'>
      <div className='flex flex-col items-center justify-center gap-y-[3vh] px-[5vw] py-[5vh] mobile:w-full sm:w-[70vw] md:w-[60vw] lg:w-[40vw] h-fit transition-all sm:rounded-2xl sm:border border-gray-500 shadow-lg hover:shadow-xl'>
        <span className='flex flex-col items-center justify-center w-full gap-y-[3vh]'>
          <h1 className='text-4xl text-gray-700 tracking-tight leading-tight'>
            Explore with us!
          </h1>
          <SiEventbrite className='text-2xl text-primaryBlue'/>
        </span>
        <form
          className='flex flex-col justiy-center gap-y-[2vh] w-full'
          onSubmit={
            handleSubmit(async (data)=>{
              onSubmit(data)
            })
          }  
        >   
          <div>
            <h1 className='tracking-tight leading-tight font-normal text-base mb-[2vh]'>
              What&apos;s your email ?
            </h1>
            <Controller
              {...register('email')}
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
            {errors.email && <span className='text-red-500 text-sm mt-[1vh]'>{errors.email.message}</span>}
          </div>
          <div>
            <h1 className='tracking-tight leading-tight font-normal text-base mb-[2vh]'>
              What&apos;s your password ?
            </h1>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder='Enter your email'
                  className='w-full p-2 border border-gray-500 rounded-md'
                />
              )}  
            />
            {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}
          </div>
          <button
            type='submit'
            className='w-full p-2 mt-[1.5vh] bg-blue-500 hover:bg-primaryBlue hover:shadow-lg text-white rounded-md'
          >
            Sign in
          </button>
          <Divider
                style={{
                    color: '#9CA3AF',
                    fontSize: '1rem',
                    fontWeight: '400',
                    margin : '0.25rem 0 0.25rem 0'
                }}
          >
            Or
          </Divider>
          <div className='flex flex-col gap-y-[1.5vh]'>
            <button
              className='flex w-full border-2 border-solid hover:border-gray-500 border-gray-600 gap-x-[1vw]  py-[1vh] rounded-full items-center justify-center hover:shadow-md'
              onClick={async (e)=>{
                e.preventDefault()
                const response : SigninStatus = await GoogleSignIn()
                if (response.status === 200) {
                  sessionStorage.setItem('profile', JSON.stringify(response.payload))
                  router.push('/')
                }else if (response.status === 404) {
                  alert(response.message)
                }
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
          </div>
        </form>
        <span className='flex flex-row items-center justify-center w-full gap-x-[1vw]'>
          <p>
            Don&apos;t have an account ?
          </p>
          <Link
            href='/signup'
            className='text-blue-500 hover:text-primaryBlue hover:underline'
          >
            Sign up
          </Link>
        </span>
      </div>
    </main>
  )
}