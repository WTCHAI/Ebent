'use server'

import { auth } from '../InitializeApp'
import { signInWithEmailAndPassword } from "firebase/auth";


export const EsignIn = (email: string, password: string) => {
    const response = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        // console.log(user.providerData[0])
        return  {
            status : 200,
            message : 'User has signed in successfully',
            payload : user.providerData[0]
        }
    })
    .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage)
        return {
            status : 400,
            message : 'Invalid email or password'
        }
    })
    return response
}
