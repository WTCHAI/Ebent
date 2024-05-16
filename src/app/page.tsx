import React from 'react'

import Navigation from '@/components/navigator/navigation'
import CarousalRender from '@/components/carousal/Carousal'
import FeedEvents from '@/components/feedBlogs/blogs'


type Props = {}

export default function Home({}: Props) {
  
  
  return (
    <main>
        <Navigation/>
        <CarousalRender/>
        {/* <FeedEvents  /> */}
    </main>
  )
}