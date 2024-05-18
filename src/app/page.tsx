import React from 'react'

import Navigation from '@/components/navigator/navigation'
import HeroSection from '@/components/home/heroSection'
import Feature from '@/components/home/feature'
import Guide from '@/components/home/guide'
import Benefit from '@/components/home/benefit'
import Cta from '@/components/home/cta'
import Footer from '@/components/footer/footer'

type Props = {}

export default function Home({}: Props) {
  
  return (
    <main className='w-full'>
        <Navigation/>
        <>
          <HeroSection/>
          <Feature/>
          <Guide/>
          <Benefit/>
          <Cta/>
        </>
        <Footer/>
    </main>
  )
}