
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// console.log('Api key : ',process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
// console.log('apiKey:', process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
// console.log('authDomain:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN);
// console.log('projectId:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
// console.log('storageBucket:', process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
// console.log('messagingSenderId:', process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID);
// console.log('appId:', process.env.NEXT_PUBLIC_FIREBASE_APP_ID);
// console.log('measurementId:', process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID);

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);