
type payloadType = {
    providerId: string | null ;
    uid: string | null;
    displayName: string | null;
    email: string | null ;
    phoneNumber: string | null ; 
    photoURL: string | null ;
}

export interface ESignupStatus {
    status: number;
    message: string;
    payload?: payloadType; 
}

export interface EFormValues {
    name : string ;
    email : string ;
    password : string ;
}