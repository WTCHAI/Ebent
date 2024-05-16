import { getDatabase, ref, set , onValue } from "firebase/database";
import { app } from "../../InitializeApp";

import { FeedBlogDetail } from '@/interface/feedBlogs/feedBlogDetails'

export const FeedsRequest = async (type : string) => {
    const db = getDatabase(app)
    if (type === 'adding'){
        set(ref(db, 'users/' + 'user1'), {
            username: 'user1',
            email: 'user1@gmail.com',
            profile_picture : 'user1.png'
        })    
    }

}