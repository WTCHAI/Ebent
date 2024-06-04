import React from 'react'

import Navigation from '@/components/navigator/navigation'
import HeroSection from '@/components/home/heroSection'
import KeyFeatures from '@/components/home/keyFeature'
import MarketplaceHome from '@/components/home/marketplace'
import ExamEvent from '@/components/home/examEvent'
import Guide from '@/components/home/guide'
import Footer from '@/components/footer/footer'


type Props = {}

export default function Home({}: Props) {
  
  return (
    <main className=' no-scrollbar'>
        <Navigation/>
            <HeroSection/>
            <KeyFeatures/>
            <ExamEvent/>
            <MarketplaceHome/>
            <Guide/>
        <Footer/>
    </main>
  )
}