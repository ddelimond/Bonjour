
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null
    );


    const login = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (<AuthContext.Provider value={{ darkMode, toggle }}>
        {children}
    </AuthContext.Provider>
    );

};