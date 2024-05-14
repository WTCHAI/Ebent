export interface EventBlogDetail {
    eventId : string ; 
    eventImage : any ;
    eventDescription : string ;
    eventTitle : string ;
    startDate : string ;
    endDate : string ;
    location : string ;
}

export interface BlogDetail {
    title: string;
    content: EventBlogDetail[];
}