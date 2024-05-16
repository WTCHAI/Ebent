import React from 'react'

import Navigation from '@/components/navigator/navigation'
import CarousalRender from '@/components/carousal/Carousal'
import FeedSection from '@/components/feedBlogs/feedSection'


type Props = {}

export default function Home({}: Props) {
  
  return (
    <main className='w-full'>
        <Navigation/>
        <CarousalRender/>
        <FeedSection />
    </main>
  )
}