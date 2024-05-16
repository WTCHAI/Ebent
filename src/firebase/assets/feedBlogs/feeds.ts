'use server'
import { getDatabase, ref , get , child  } from "firebase/database";
import { app } from "../../InitializeApp";

import { FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails'

export const onGetFeeds = async () => {
    const dbRef = ref(getDatabase(app))
    const response = get(child(dbRef, `/feeds`)).then((snapshot) => {
        if (snapshot.exists()) {
          return {
            status : 200,
            message : 'Data available',
            payload : snapshot.val()
          }
        } else {
            return {
                status : 404,
                message : 'No data available'
            }
        }
    }).catch((error) => {
        return {
            status : 404,
            message : error.message
        }
    })
    return response 
}

