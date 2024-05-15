'use client'

import SignUp from '@/components/authen/signup/Signup'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  
  return (
    <main className='w-full h-full overflow-hidden '>
      <SignUp/>
    </main>
  )
}