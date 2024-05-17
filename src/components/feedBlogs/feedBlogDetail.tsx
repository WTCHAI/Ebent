import React from 'react'

import { FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails';

import { Image } from 'antd'
import { ImLocation } from "react-icons/im";


type Props = {
  detail : FeedBlogDetail
}

function translateDay(day: string ) {
    switch (day) {
        case 'วันอาทิตย์ที่':
            return 'อา';
        case 'วันจันทร์ที่':
            return 'จ';
        case 'วันอังคารที่':
            return 'อ';
        case 'วันพุธที่':
            return 'พ';
        case 'วันพฤหัสบดีที่':
            return 'พฤ';
        case 'วันศุกร์ที่':
            return 'ศ';
        case 'วันเสาร์ที่':
            return 'ส';
        default:
    }
}

export default function BlogsDetail({detail}: Props) {
  //date transform handler
  const startDate = new Date(detail.startDate)
  const endDate = new Date(detail.endDate)
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
  const TransDateS = startDate.toLocaleDateString('th-TH', options).split(' ')
  const TransDateE = endDate.toLocaleDateString('th-TH', options).split(' ')

  return (
    <div className='flex flex-col rounded-xl h-full px-[1vw] py-[2vh] justify-between'>
      <div className='flex rounded-lg'>
        <Image 
          src="https://placehold.co/1980x1080"
        />
      </div>
      <div className='flex flex-col h-full pt-[1vh]'>
        <p className='text-red-500 text-xs font-normal mt-[1vh]'>{translateDay(TransDateS[0])} , {TransDateS[1]} {TransDateS[2]} {TransDateE[3]}</p>
        <div className='flex flex-col gap-y-[1vh]'>
          <h1 className='text-base font-medium mt-[0.5vh] '>{detail.eventTitle}</h1>
          <span className='flex flex-row items-center gap-x-[1vw] mt-[1vh] pl-[1vw]'> 
            <ImLocation className='text-base'/>
            <p className='text-xs font-normal text-gray-400 '>{detail.location}</p>
          </span>          
        </div>
      </div>
    </div>
  )
}