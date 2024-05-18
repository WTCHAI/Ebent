
import CarouselRender from '@/components/explore/carousal/Carousal'
import FeedSection from '@/components/explore/feedBlogs/feedSection'

import React, { useEffect, useState } from 'react'


type Props = {}


export default async function page({}: Props) {

  return (
    <main>
      <CarouselRender />
      <FeedSection />
    </main>
  );
}