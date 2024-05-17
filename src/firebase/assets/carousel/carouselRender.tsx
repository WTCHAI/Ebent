import React from 'react'

import { Carousel } from 'antd';
import Image from 'next/image';

type Props = {}

export default function CarouselRender({}: Props) {
  return (
    <>
    <Carousel
          autoplay
          draggable
          autoplaySpeed={4000}
          dotPosition='bottom'
          effect='scrollx'
          className='border-none outline-none'
          speed={2000}
        >
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src=''
              alt='Hotels structure image'
              className=''
              width={3840}
              height={2160}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src=''
              alt='Hotels structure image'
              className=''
              width={3840}
              height={2160}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src=''
              alt='Hotels structure image'
              className=''
              width={3840}
              height={2160}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src=''
              alt='Hotels structure image'
              className=''
              width={3840}
              height={2160}
            />
          </div>
          <div className='flex w-full h-fit max-h-[70vh] text-center items-center overflow-y-scroll'>
            <Image
              src=''
              alt='Hotels structure image'
              className=''
              width={3840}
              height={2160}
            />
          </div>      
    </Carousel>   
    </>
  )
}