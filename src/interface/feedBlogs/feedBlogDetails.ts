export interface FeedBlogDetail {
    eventId : string ; 
    eventImage : any ;
    eventDescription : string ;
    eventTitle : string ;
    startDate : string ;
    endDate : string ;
    location : string ;
}

export interface FeedDetails {
    title: string;
    content: FeedBlogDetail[];
}