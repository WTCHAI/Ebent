'use server'

import { auth } from '../InitializeApp'
import { createUserWithEmailAndPassword } from "firebase/auth";

import { EFormValues } from '@/interface/authen/EsignUpStatus'

export const ESignUpAuth = (formValue : EFormValues)=>{

    const response = createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
            return  {
                status : 200,
                message : 'User has signed in successfully',
                payload : user.providerData[0]
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            return {
                status : 400,
                message : 'Invalid email or password'
            }
        });
    return response
}