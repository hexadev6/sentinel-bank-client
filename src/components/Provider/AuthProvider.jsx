import { createContext, useState} from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../../Firebase/Firebase.config";
// import auth from "../../../../Firebase/Firebase.config";




export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
  
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


    const authInfo ={
       
       user,
       loading,
       userSignUp,
       userLogin


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;