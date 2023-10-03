import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)

// email/password authentication
const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

    const authInfo = {
        createUser

    }
// console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;