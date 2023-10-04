import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 
  // sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

//sign out
const logOut = ()=>{
    return signOut(auth)
}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(19, user);
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
   user, createUser,signIn,logOut
  };
  // console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
