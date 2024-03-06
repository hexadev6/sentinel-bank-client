import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import PropTypes from "prop-types";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axios = useAxiosSecure();
  // const axios = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const UserProfileUpdate = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // const emaillVerification=()=>{
  //     setLoading(true)
  //     return sendEmailVerification(auth.currentUser)
  // }
  const passwordRest = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;

      const emailuser = { email: userEmail };
      //    console.log(currentUser)
      setUser(currentUser);
      setLoading(false);

      // if (currentUser) {
      //   try {
      //     axios
      //       .post("/jwt", emailuser)
      //       .then()
      //       .catch((error) => console.log(error));
      //   } catch (error) {
      //     console.log(error);
      //   }
      // } else {
      //   axios.post("/logout").then().catch();
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, [axios, user?.email]);

  const authInfo = {
    user,
    loading,
    userSignUp,
    userLogin,
    userLogOut,
    UserProfileUpdate,
    //    emaillVerification,
    passwordRest,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
