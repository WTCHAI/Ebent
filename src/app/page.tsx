import React from 'react'

import Navigation from '@/components/navigator/navigation'


import Footer from '@/components/footer/footer'

type Props = {}

export default function Home({}: Props) {
  
  return (
    <main className='w-full'>
        <Navigation/>

        <Footer/>
    </main>
  )
}