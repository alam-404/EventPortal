import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import firebaseApp from "../firebase/firebase.auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [pageLoading, setPageLoading] = useState(true)

    const firebaseAuth = getAuth(firebaseApp)

    // create user
    const createUser = (name, email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
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
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [firebaseAuth])

    const authInfo = {
        user,
        pageLoading,
        loginUser,
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