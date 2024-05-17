
import CarouselRender from '@/components/explore/carousal/Carousal'
import FeedSection from '@/components/explore/feedBlogs/feedSection'

import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <main>
        <CarouselRender/>
        <FeedSection/>
    </main>
  )
}