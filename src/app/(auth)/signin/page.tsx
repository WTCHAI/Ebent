import React from 'react'

import Signin from '@/components/authen/signin/Signin'

type Props = {}

export default function page({}: Props) {
  return (
    <main className='w-full h-full overflow-hidden '>
      <Signin/>
    </main>
  )
}