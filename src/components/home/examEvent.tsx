'use client'

import React, { useState , useEffect} from 'react';

import { FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails';
import { FeedStatus } from '@/interface/feedBlogs/feedstatus';
import { onGetExamEvent } from '@/firebase/assets/home/examEvent';

import { Skeleton } from 'antd';

type FeedState = {
  isLoading : boolean,
  currentFeeds : FeedBlogDetail[] | null,
  status : number
}




export default function ExamEvent() {

  const [Feeds,onSetCurrentFeeds] = useState<FeedState>({
    isLoading : true,
    currentFeeds : null,
    status : 200
  })

  async function onGettingFeed (){
    const response : FeedStatus = await onGetExamEvent()
    //Initializing the session storage for the exam event
    sessionStorage.setItem('examEvent', JSON.stringify(response.payload.content))
    // console.log(response.payload.content)
    const tempFeeds: FeedBlogDetail[] = response.payload.content
    onSetCurrentFeeds({
        currentFeeds : tempFeeds,
        status: response.status,
        isLoading : false
    })
  }

  useEffect(()=>{
    onGettingFeed()
    onSetCurrentFeeds({
      ...Feeds,
      isLoading : true
    })
  // //Setting delays 2 sec 
     if (sessionStorage.getItem('examEvent')) {
          const tempFeeds : FeedBlogDetail[] = (JSON.parse(sessionStorage.getItem('feeds') as string)) 

          onSetCurrentFeeds({
              ...Feeds,
              currentFeeds: tempFeeds,
              status: 200,
              isLoading : false
          })
      }else if (!sessionStorage.getItem('examEvent')){
          // is the case when the user is visiting the site for the first time
          onGettingFeed()
      }   
  },[])
  return (
    <section className="bg-slate-600 py-[20vh]" id="explore">
      <div className="flex flex-col px-4 items-center justify-center">
        <h2 className="text-3xl font-semibold text-slate-50 mb-8 text-center">Explore Upcoming Events</h2>
      </div>
      <ul className="flex flex-row gap-8 overflow-x-scroll px-[5vw]">

          {/* Event cards would be dynamically generated here */}

          {
            Feeds.currentFeeds?.map((feed,index) => {
              //date translation
              const startDate = new Date(feed.startDate);
              const endDate = new Date(feed.endDate);
              const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
              const TransDateS = startDate.toLocaleDateString('th-TH', options).split(' ');
              const TransDateE = endDate.toLocaleDateString('th-TH', options).split(' ');
            
              return (
                <li
                  key={feed.eventId}
                  className="bg-gray-100 px-[10vw] rounded-lg shadow-md w-[30vw]"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{feed.eventTitle}</h3>
                  <p className="text-gray-600 mt-2">{feed.eventDescription}</p>
                  
                  <a href="#" className="text-primaryBlue mt-4 inline-block">Learn More</a>
                </li>  
              )
          })}
          {(Feeds.isLoading || Feeds === null) && 
            <li>
              <Skeleton active />
            </li>
          }

          {/* Repeat above block for more events */}
      </ul>
    </section>
  );
}
