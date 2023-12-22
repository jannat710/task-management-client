import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

        //create user
        const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
        }
        //update user
        const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            });
        }
        //Login
        const signIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        }
        //Google sign in
        const googleSignIn = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
        }
    
        //Logout user
        const logOut = () => {
            setLoading(true);
            return signOut(auth);
        }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('Current user',currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, [])
    const authentication={
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;