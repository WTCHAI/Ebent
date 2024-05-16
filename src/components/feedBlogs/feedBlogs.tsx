import React from 'react'

import { FeedDetails , FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails'

type Props = {
    feedDetails: FeedDetails ;
}

export default function FeedBlogSection({feedDetails}: Props) {
    console.log(feedDetails)
    return (
        <section>
            <>qwerqwerqwer</>
            {/* <span className='flex flex-row w-full justify-between'>
                <h1 className='text-3xl font-medium'>
                    {feedDetails.title}
                </h1>
                {
                    feedDetails.title !== 'Upcoming Events' &&
                    <button className='hover:opacity-70'>
                        <p className='text-xl text-blue-700 font-medium '>
                            View All
                        </p>
                    </button>                
                }
            </span> */}
            {/* <div className='mt-[5vh]'>
                <ul className='flex flex-wrap items-center mobile:justify-center gap-x-[2vw] gap-y-[3vh] w-full '>
                    {feedDetails.content.map((e : FeedBlogDetail)=>{
                        return (
                            <li
                                key={e.eventTitle}
                                className='mobile:w-[30rem] sm:w-1/3 md:w-1/4 sm:h-[20rem] bg-gray-100 border border-gray-100 hover:opacity-80 rounded-xl hover:shadow-lg transition-all'
                            >
                                <p>
                                    
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div> */}
        </section>
    )
}