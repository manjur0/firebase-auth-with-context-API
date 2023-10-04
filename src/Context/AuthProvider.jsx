import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // useEffect current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);
            setLoading(false);
            console.log('observing current user', currenUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = { user, loading, createUser, signInUser, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;