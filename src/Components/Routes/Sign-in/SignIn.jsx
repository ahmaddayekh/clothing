import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../../Utils/Firebase/Firebase"


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        // console.log(response)
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </div>
    )
}

export default SignIn