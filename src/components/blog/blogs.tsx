import React from 'react'


import ExamEvent from './ExamEvent';

import { BlogDetail } from '@/interface/blogDetails'
import { EventBlogDetail } from '@/interface/blogDetails'


type Props = {
    blogDetails: BlogDetail ;
}

export default function Blogs({blogDetails}: Props) {
  return (
    <section>
        <span className='flex flex-row w-full justify-between'>
            <h1 className='text-3xl font-medium'>
                {blogDetails.title}
            </h1>
            {
                blogDetails.title !== 'Upcoming Events' &&
                <button className='hover:opacity-70'>
                    <p className='text-xl text-blue-700 font-medium '>
                        View All
                    </p>
                </button>                
            }
        </span>
        <div className='mt-[5vh]'>
            <ul className='flex flex-wrap items-center mobile:justify-center gap-x-[2vw] gap-y-[3vh] w-full '>
                {blogDetails.content.map((e : EventBlogDetail)=>{
                    return (
                        <li
                            key={e.eventTitle}
                            className='mobile:w-[30rem] sm:w-1/3 md:w-1/4 sm:h-[20rem] bg-gray-100 border border-gray-100 hover:opacity-80 rounded-xl hover:shadow-lg transition-all'
                        >
                            <ExamEvent detail={e}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}