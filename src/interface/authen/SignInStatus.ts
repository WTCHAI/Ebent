
type payloadType = {
    providerId: string | null ;
    uid: string | null;
    displayName: string | null;
    email: string | null ;
    phoneNumber: string | null ; 
    photoURL: string | null ;
}
export interface SigninStatus {
    status: number;
    message: string;
    payload?: payloadType; 
}

