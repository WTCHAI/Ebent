// 'use client'

// import React, { useState } from 'react'

// import * as z from 'zod'
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// import { ESignupSchema } from '@/schemas/authen';
// import { Esignup } from '@/utils/actions/authentication/Esignup';

// import Link from 'next/link'

// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import { Input } from 'antd';
// import { useRouter } from 'next/navigation';

// type Props = {}

// function isValidEmail(email: string): boolean {
//   // Regular expression for validating an email
//   const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function isValidPassword(password: string): boolean {
//   // Regular expression for validating a password
//   const passwordRegex: RegExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//   return passwordRegex.test(password);
// }

// export default function ESignUp({}: Props) {
//   //router redirect to sign in page
//   const router = useRouter()

//   //form value and status handler
//   const form = useForm<z.infer<typeof ESignupSchema>>({
//     resolver: zodResolver(ESignupSchema),
//     defaultValues : {
//       name: '',
//       email: '',
//       password: ''
//     },
//   })

//   return (
//     <div className='flex items-center justify-center w-full h-full text-gray-500  '>
//       <div
//         className='flex flex-col items-center justify-center  gap-y-[3vh] px-[5vw] py-[5vh] w-[40vw] h-fit transition-all rounded-2xl border border-gray-800 hover:shadow-xl'
//       >  
//         <span className='flex flex-col items-center justify-center w-full gap-y-[3vh]'>
//           <h1 className='text-4xl text-gray-700 tracking-tight leading-tight'>
//             Explore with Us !
//           </h1>
//           <span className='rounded-full bg-gray-200 p-5'>
            
//           </span>
//         </span>
//         <form  
//           className='flex flex-col justiy-center gap-y-[3vh]'
//           onSubmit={
//             form.handleSubmit(async (data) => {
//                 if (data.name.length <= 1) {
//                   form.setError('name', {message : "Name should be at least 2 characters long."})
//                 }
//                 if (!isValidEmail(data.email)) {
//                   form.setError('email', {message : "Email is required and should be valid qwer."})
//                 }
//                 if (!isValidPassword(data.password)) {
//                   form.setError('password', {message : "Password should be at least 8 characters long."})
//                 }
//                 if (data.name.length >= 1 && isValidEmail(data.email) && isValidPassword(data.password)) {
//                   const response = await Esignup(data)
//                   if (response.status === 200) {
//                     alert(response.message)
//                     router.push('/signin')
//                   }
//                   else {
//                     alert(response.message)
//                   }
//                 }

//             })
//           }
//         >
//           <div className='flex flex-col items-center justify-center gap-y-[1.25vh]'>
//             <h1 className='text-2xl text-gray-700 tracking-tight leading-tight'>Creating Account</h1>
//             <span className='flex flex-row gap-x-[0.5vw] items-center font-light'>
//               <p className='text-lg'>Already have an account?</p>
//               <Link href="/signin">
//                 <p className='underline hover:text-gray-600'>
//                   Log in
//                 </p>
//               </Link>            
//             </span>
//           </div>

//           <div className=''>
//             <h1 className='tracking-tight leading-tight font-normal text-base mb-[1vh]'>
//               What should we call you ?
//             </h1>
//             <Input
//               {...form.register('name' , {
//                 required: 'Name is required.' ,
//                 minLength : {
//                   value : 1,
//                   message : 'Name should be at least 2 characters long.'
//                 },
//                 maxLength : {
//                   value : 20,
//                   message : 'Name should be at most 20 characters long.'
//                 },
//               })}
//               onChange={(e : React.ChangeEvent<HTMLInputElement> )=>{
//                 const targetInput = e.target.value.trim()
//                 form.setValue('name',targetInput)                
//               }}
//               type='text'
//               placeholder='Enter your profile name'
//               className='py-[1vh] rounded-xl'
//             />
//             <p className='text-red-400 mt-[0.5vh]'>{form.formState.errors.name?.message}</p>
//           </div>

//           <div>
//             <h1 className='tracking-tight leading-tight font-normal text-base mb-[1vh]'>
//               What&apos;s your email ?
//             </h1>
//             <Input
//               {...form.register('email' , {
//                 required : 'Email is required and should be valid.',
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: 'Email is not valid.'
//                 }
//               })}
//               onChange={(e : React.ChangeEvent<HTMLInputElement> )=>{
//                 const targetInput = e.target.value.trim()
//                 form.setValue('email',targetInput)
//               }}
//               placeholder='Enter your email address'
//               type='email'
//               className='py-[1vh] rounded-xl'
//             />
//             <p className='text-red-400 mt-[0.5vh]'>{form.formState.errors.email?.message}</p>
//           </div>
//           <div>
//             <div>
//               <h1 className='tracking-tight leading-tight font-normal text-base mb-[1vh]'>
//                 Create a password
//               </h1>            
//             </div>
//             <Input.Password
//               placeholder='Enter your password'
//               type='password'
//               {...form.register('password' , {
//                 required: true,
//                 minLength : {
//                   value : 8,
//                   message : 'Password should be at least 8 characters long.'
//                 }
//               })}
//               onChange={(e : React.ChangeEvent<HTMLInputElement> )=>{
//                 const targetInput = e.target.value.trim()
//                 form.setValue('password',targetInput)
//               }}
//               iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//               className='py-[1vh] rounded-xl'
//             />
//             <p className={`text-sm mt-[1vh] ${form.formState.errors.password?.message ? 'text-red-400 ' : ''}`}>
//               Use 8 more characters with a mix of letters, numbers & symbols
//             </p>
//           </div>

//           <button
//             className='w-full bg-gray-800 hover:opacity-85 shadow-sm hover:shadow-md py-[1vh] rounded-3xl cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50'
//             type='submit'
//           >
//             <p className='text-white'>
//               Create an account
//             </p>
//           </button>
//         </form> 
//       </div>      
//     </div>
//   )
// }