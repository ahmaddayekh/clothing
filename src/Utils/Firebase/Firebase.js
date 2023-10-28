import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup , signInWithRedirect , GoogleAuthProvider } from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBjix-HDtncadbodAmGVCHEQHq-_AOWvgA",
    authDomain: "crwn-clothing-db-3aabe.firebaseapp.com",
    projectId: "crwn-clothing-db-3aabe",
    storageBucket: "crwn-clothing-db-3aabe.appspot.com",
    messagingSenderId: "438143900537",
    appId: "1:438143900537:web:99788e79c65fe52be7eda8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

  
  if(!userSnapshot.exists()){
    const {displayName ,email} = userAuth
    const createdAt =new Date()

    try {
        await setDoc(userDocRef,{
            displayName,
            email,
            createdAt
        })
    } catch(error) {
       console.log('error creating the user' ,error.message)
     }
    }
    return userDocRef
}