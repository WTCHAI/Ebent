'use client'
import React, { useEffect , useState } from 'react'

import FeedBlogSection from './feedBlogs'
import { onGetFeeds } from '@/firebase/assets/feedBlogs/feeds'

import { FeedStatus } from '@/interface/feedBlogs/feedstatus'
import { FeedDetails } from '@/interface/feedBlogs/feedBlogDetails'


type FeedState = {
    isLoading : boolean,
    currentFeeds : FeedDetails[],
    status : number
}

export default function FeedSection() {
    const [feeds, setFeeds] = useState<FeedState>({
        isLoading : true,
        currentFeeds : [],
        status : 200 
    })

    const feedsData = async ()=>{
        const response : FeedStatus = await onGetFeeds()
        localStorage.setItem('feeds', JSON.stringify(response.payload))
        const tempFeeds: FeedDetails[] = Object.values(response.payload) // Explicitly type tempFeeds as FeedDetails[]
        const reOrderingFeeds = [
            tempFeeds[2],
            tempFeeds[3],
            tempFeeds[1],
            tempFeeds[0]
        ]
        setFeeds({
            ...feeds,
            currentFeeds : reOrderingFeeds,
            status: response.status,
            isLoading : false
        })
    }
    
    useEffect(() => {
        setFeeds({
            ...feeds,
            isLoading : true
        })
        //Setting delays 2 sec
        setTimeout(() => {
            if (localStorage.getItem('feeds')) {
                const tempFeeds : FeedDetails[] = Object.values(JSON.parse(localStorage.getItem('feeds') as string)) 
                const reOrderingFeeds = [
                    tempFeeds[2],
                    tempFeeds[3],
                    tempFeeds[1],
                    tempFeeds[0]
                ]
                console.log(reOrderingFeeds)
                setFeeds({
                    ...feeds,
                    currentFeeds: reOrderingFeeds,
                    status: 200,
                    isLoading : false
                })
            }else if (!localStorage.getItem('feeds')){
                // is the case when the user is visiting the site for the first time
                feedsData()
            }             
        }, 2000)
    },[])
    return (
        <section className='px-[5vw] my-[5vh]'>  
            <>
                {
                    feeds.currentFeeds.map((e : FeedDetails)=>{
                        return (
                            <FeedBlogSection isLoading={feeds.isLoading} feedDetails={e}/>
                        )
                    })
                }
            </>

        </section>
    )
}