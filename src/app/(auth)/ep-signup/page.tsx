import React from 'react'

import ESignUp from '@/components/authen/signup/ESignup'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='w-full h-full overflow-hidden '>
        <ESignUp/>
    </main>
  )
}