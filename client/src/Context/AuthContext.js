import { useContext, createContext, useEffect, useState } from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged,
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    updateProfile,
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
        return new Promise((resolve, reject) => {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in successfully
              const user = userCredential.user;
              // Set user in your context or handle it as needed
              setUser(user);
              resolve(user);
            })
            .catch((error) => {
              const errorMessage = error.message;
              reject(errorMessage);
            });
        });
      };

      const emailSignUp = async (email, password, displayName) => {
        return new Promise((resolve, reject) => {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up successfully
              const user = userCredential.user;
      
              // Update the user's profile with the provided displayName
              updateProfile(user, { displayName: displayName })
                .then(() => {
                  // Profile updated successfully
                  console.log('User signed up with name:', displayName);
                  resolve(user);
                })
                .catch((updateError) => {
                  // Error updating profile
                  console.error('Error updating profile:', updateError.message);
                  reject(updateError.message);
                });
            })
            .catch((error) => {
              const errorMessage = error.message;
              reject(errorMessage);
            });
        });
      };

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