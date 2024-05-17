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
          arrows
          autoplaySpeed={4000}
          dotPosition='bottom'
          effect='scrollx'
          className=''
          speed={2000}
        >
          <div className='flex w-[100vw] h-fit max-h-[70vh] justify-center items-center overflow-y-scroll lg:px-[3vw] lg:py-[4vh]'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/ebent-2fb48.appspot.com/o/assets%2Fcarousel%2Ftech.png?alt=media&token=abee0f4e-a045-409a-8681-e0bf679c6b33'
              alt='Hotels structure image'
              className='flex justify-center hover:shadow-xl hover:opacity-95 rounded-xl items-center'
              width={2048}
              height={720}
            />
          </div>
          <div className='flex w-[100vw] h-fit max-h-[70vh] justify-center items-center overflow-y-scroll lg:px-[3vw] lg:py-[2vh]'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/ebent-2fb48.appspot.com/o/assets%2Fcarousel%2Freo.png?alt=media&token=58f9da63-9528-4bee-b558-a287bf200707'
              alt='Hotels structure image'
              className='flex justify-center hover:shadow-xl hover:opacity-95 rounded-xl items-center'
              width={2048}
              height={720}
            />
          </div>
          <div className='flex w-[100vw] h-fit max-h-[70vh] justify-center items-center overflow-y-scroll lg:px-[3vw] lg:py-[2vh]'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/ebent-2fb48.appspot.com/o/assets%2Fcarousel%2Fpieceniture.png?alt=media&token=77eeb60c-bcd8-4b66-aed0-7de26fb10afc'
              alt='Hotels structure image'
              className='flex justify-center hover:shadow-xl hover:opacity-95 rounded-xl items-center'
              width={2048}
              height={720}
            />
          </div>
          <div className='flex w-[100vw] h-fit max-h-[70vh] justify-center items-center overflow-y-scroll lg:px-[3vw] lg:py-[2vh]'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/ebent-2fb48.appspot.com/o/assets%2Fcarousel%2Fpiece.png?alt=media&token=544440c9-00f1-4f76-9239-5b5acba3bdd7'
              alt='Hotels structure image'
              className='flex justify-center hover:shadow-xl hover:opacity-95 rounded-xl items-center'
              width={2048}
              height={720}
            />
          </div>
          <div className='flex w-[100vw] h-fit max-h-[70vh] justify-center items-center overflow-y-scroll lg:px-[3vw] lg:py-[2vh]'>
            <Image
              src='https://firebasestorage.googleapis.com/v0/b/ebent-2fb48.appspot.com/o/assets%2Fcarousel%2Fmastertech.png?alt=media&token=bab80bcb-5f52-4721-b405-7d065b5b49a6'
              alt='Hotels structure image'
              className='flex justify-center hover:shadow-xl hover:opacity-95 rounded-xl items-center'
              width={2048}
              height={720}
            />
          </div>      
    </Carousel>   
    </>
  )
}