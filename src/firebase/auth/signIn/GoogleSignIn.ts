
import { auth } from "../InitializeApp"

import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider()

export const GoogleSignIn = () => {
    const response = signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            // console.log('Token : ',token)
            // console.log('Credential : ',credential)
            return {
                status : 200,
                message : 'User has signed in successfully',
                payload : user.providerData[0]
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            return {
                status: 404,
                message: errorMessage
            }
        })
    return response
}
