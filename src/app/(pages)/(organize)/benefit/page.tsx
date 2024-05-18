import React from 'react'

import Navigation from '@/components/navigator/navigation'
import HeroSection from '@/components/organize/benefit/heroSection'
import Feature from '@/components/organize/benefit/feature'
import Guide from '@/components/organize/benefit/guide'
import Benefit from '@/components/organize/benefit/benefit'
import Cta from '@/components/organize/benefit/cta'


type Props = {}

export default function page({}: Props) {
  return (
    <div>
        <>
          <HeroSection/>
          <Feature/>
          <Guide/>
          <Benefit/>
          <Cta/>
        </>
    </div>
  )
}