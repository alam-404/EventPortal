import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import firebaseApp from "../firebase/firebase.auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [pageLoading, setPageLoading] = useState(true)
    const [displayName, setDisplayName] = useState('')

    const firebaseAuth = getAuth(firebaseApp)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    // login with google
    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(firebaseAuth, provider)
    }

    // logout a user
    const logout = () => {
        setPageLoading(true)
        return signOut(firebaseAuth)
    }

    // observe user via firebase observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
            setPageLoading(false)
            if (displayName != '') {
                updateProfile(currentUser, {
                    displayName: displayName
                })
            }
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [displayName, firebaseAuth])

    const authInfo = {
        user,
        setDisplayName,
        pageLoading,
        loginUser,
        googleLogin,
        createUser,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;