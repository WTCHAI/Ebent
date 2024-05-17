import CarouselRender from '@/components/carousal/Carousal'
import FeedSection from '@/components/feedBlogs/feedSection'
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