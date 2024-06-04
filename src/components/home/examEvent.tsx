'use client'

import React, { useState , useEffect , useRef} from 'react';

import Link from 'next/link';

import { FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails';
import { FeedStatus } from '@/interface/feedBlogs/feedstatus';
import { onGetExamEvent } from '@/firebase/assets/home/examEvent';

import { FaArrowCircleRight } from "react-icons/fa";

import { Skeleton } from 'antd';

type FeedState = {
  isLoading : boolean,
  currentFeeds : FeedBlogDetail[] | null,
  status : number
}

function translateDay(day: string) {
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
      return '';
  }
}



export default function ExamEvent() {

  const [Feeds,onSetCurrentFeeds] = useState<FeedState>({
    isLoading : true,
    currentFeeds : null,
    status : 200
  })
  //getting data from firebase & session storage
  async function onGettingFeed (){
    const response : FeedStatus = await onGetExamEvent()
    //Initializing the session storage for the exam event
    sessionStorage.setItem('examEvent', JSON.stringify(response.payload.content))
    // console.log(response.payload.content)
    const tempFeeds: FeedBlogDetail[] = response.payload.content
    // console.log(tempFeeds)
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
     if (sessionStorage.getItem('examEvent')) {
          const tempFeeds : FeedBlogDetail[] = (JSON.parse(sessionStorage.getItem('examEvent') as string)) 

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

  //scrolling function
  const EventList = useRef<HTMLUListElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const listElement = EventList.current;
    if (listElement) {
      const handlePointerDown = (e: PointerEvent) => {
        isDragging.current = true;
        startX.current = e.pageX - listElement.offsetLeft;
        scrollLeft.current = listElement.scrollLeft;
        listElement.style.cursor = 'grabbing';
        listElement.style.userSelect = 'none';
      };

      const handlePointerMove = (e: PointerEvent) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - listElement.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll-fast
        listElement.scrollLeft = scrollLeft.current - walk;
      };

      const handlePointerUp = () => {
        isDragging.current = false;
        listElement.style.cursor = 'grab';
        listElement.style.removeProperty('user-select');
      };

      listElement.addEventListener('pointerdown', handlePointerDown);
      listElement.addEventListener('pointermove', handlePointerMove);
      listElement.addEventListener('pointerup', handlePointerUp);
      listElement.addEventListener('pointerleave', handlePointerUp);

      return () => {
        listElement.removeEventListener('pointerdown', handlePointerDown);
        listElement.removeEventListener('pointermove', handlePointerMove);
        listElement.removeEventListener('pointerup', handlePointerUp);
        listElement.removeEventListener('pointerleave', handlePointerUp);
      };
    }
  }, []);

  return (
    <section className="items-center bg-slate-700 ">
      <div className="flex flex-col px-4 items-center justify-center">
        <h2 className="mobile:text-2xl  md:text-4xl font-semibold text-slate-50 mt-[5vh] text-center">Explore Upcoming Events</h2>
      </div>
      <ul
        className="flex flex-row items-center gap-8 overflow-x-scroll pt-[5vh]  pb-[10vh] px-[5vw] active:cursor-grabbing"
        ref={EventList}
      >
          {
            Feeds.currentFeeds?.map((feed) => {
              //date translation
              const startDate = new Date(feed.startDate);
              const endDate = new Date(feed.endDate);
              const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
              const TransDateS = startDate.toLocaleDateString('th-TH', options).split(' ');
              const TransDateE = endDate.toLocaleDateString('th-TH', options).split(' ');
            
              return (
                <li
                  key={feed.eventId}
                  className="bg-gray-100 min-w-[40vw] h-[50vh] px-[3vw] rounded-lg shadow-md py-[2vh] my-[3vh]  hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:translate-y-[-1vh] cursor-default"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{feed.eventTitle}</h3>
                  <p className="text-gray-600 mt-2">{feed.eventDescription}</p>
                  <p className="text-red-500 text-xs font-normal mb-2">
                    {translateDay(TransDateS[0])}, {TransDateS[1]} {TransDateS[2]} {TransDateE[3]}
                  </p>
                  <Link href="#" className="text-primaryBlue mt-4 inline-block">Learn More</Link>
                </li>  
              )
          })}
          {(Feeds.isLoading || Feeds === null) && 
            <li>
              <Skeleton active />
            </li>
          }
          
          <li 
            className='ml-[2vw]'
          >
            <Link href="/explore">
              <FaArrowCircleRight className='text-5xl text-slate-50 hover:scale '/>
            </Link>
            
          </li>
        
          {/* Repeat above block for more events */}
      </ul>
    </section>
  );
}
