import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../components/Login/Firebase/firebase.init";

initilizeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(result.user)
        })
        .catch(error => {
            console.log(error.message);
        })

    }

    //observe user state change
    useEffect(() => {
        const unSubscribed =  onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
        return () => unSubscribed;
    },[])
    const logOut = () => {
        signOut(auth)
        .then(() => {})
    }
    


    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;