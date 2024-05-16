'use server'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../InitializeApp'

export const EsignIn = (email: string, password: string) => {
    const auth = getAuth(app)
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

        return {
            status : 404,
            message : errorMessage
        }
    })
    return response
}
