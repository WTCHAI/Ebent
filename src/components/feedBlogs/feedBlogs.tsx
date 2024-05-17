import React from 'react'

import { FeedDetails , FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails'
import BlogsDetail from './feedBlogDetail';

type Props = {
    feedDetails: FeedDetails ;
}

export default function FeedBlogSection({feedDetails}: Props) {
    return (
        <section>
            <span className='flex flex-row w-full justify-between'>
                <h1 className='text-2xl font-medium text-gray-700'>
                    {feedDetails.title}
                </h1>
                {
                    feedDetails.title !== 'Upcoming Events' &&
                    <button className='py-[1vh] px-[1vw] rounded-xl hover:bg-gray-50 hover:shadow-lg'>
                        <p className='text-xl text-gray-400 font-medium hover:text-primaryBlue transition-colors duration-700'>
                            View All
                        </p>
                    </button>                
                }
            </span>
            <div className='mt-[5vh]'>
                <ul className='flex flex-wrap items-center mobile:justify-center gap-x-[2vw] gap-y-[3vh] w-full '>
                    {feedDetails.content.map((e : FeedBlogDetail)=>{
                        return (
                            <li
                                key={e.eventTitle}
                                className='mobile:w-[30rem] mobile:h-full sm:w-[30rem]  md:h-[45vh] md:w-[20rem] md:min-h-[20vh] lg:w-[25rem] bg-gray-100 border border-gray-100 hover:opacity-80 rounded-xl hover:shadow-lg transition-all'
                            >
                                <BlogsDetail detail={e}/>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </section>
    )
}