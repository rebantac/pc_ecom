import { useContext, createContext, useEffect, useState } from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged, 
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();
// const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        // signInWithRedirect(auth, provider)
    }

    const emailSignIn = async (email, password) => {
            const userCredential = await auth.signInWithEmailAndPassword(
              email,
              password
            );
            const user = userCredential.user;
            alert('Login successful!');
            console.log(user);
    }

    const emailSignUp = async(email, password) => {
       
            await auth.createUserWithEmailAndPassword(email, password);
            alert('Registration successful!');
    }

    const logout = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={{ googleSignIn, logout, user, emailSignIn, emailSignUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}