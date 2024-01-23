import { createContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import PropTypes from 'prop-types';



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
  
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    const userSignUp = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin= (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
           console.log(currentUser)
           setUser(currentUser)
           setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const UserProfileUpdate =(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo

        })
    }
    const userLogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }


    const authInfo ={
       
       user,
       loading,
       userSignUp,
       userLogin,
       userLogOut,
       UserProfileUpdate


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}