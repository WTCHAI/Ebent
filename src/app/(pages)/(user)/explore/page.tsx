
import CarouselRender from '@/components/explore/carousal/Carousal'
import ExploreEvents from '@/components/explore/chatblogs/feeds';
import FeedSection from '@/components/explore/feedBlogs/feedSection'

import React from 'react'


type Props = {}


export default async function page({}: Props) {

  return (
    <main>
      {/* <CarouselRender /> */}
      <FeedSection />
      {/* <ExploreEvents/> */}
    </main>
  );
}