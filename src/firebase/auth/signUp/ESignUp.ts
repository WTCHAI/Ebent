'use server'

import { createUserWithEmailAndPassword , getAuth , updateProfile} from "firebase/auth";
import { app } from '../../InitializeApp'

import { EFormValues } from '@/interface/authen/EsignUpStatus'

export const ESignUpAuth = (formValue : EFormValues)=>{
    const auth = getAuth(app)
    const response = createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
            updateProfile(user,{displayName:formValue.name})

            return  {
                status : 200,
                message : 'User has signed in successfully',
                payload : user.providerData[0]
            }
        })
        .catch((error) => {
            return {
                status : 404,
                message : error.message
            }
        });
    return response
}