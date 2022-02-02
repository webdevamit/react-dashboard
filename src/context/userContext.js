import React, { useEffect, useContext, useState } from "react";
import { isLogged } from "../guard/routeGuard";
export const UserContext = React.createContext(null);
export function UserProvider(props) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false);
    useEffect(() => {
        isLogged().then(response => {
            setUser(response);
            setLoading(false);
        });
    }, []);
    const contextValue = {
        loading,
        user
    };
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}
export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(
            "useUser must be used within a UserProvider. Wrap a parent component in <UserProvider> to fix this error."
        );
    }
    return context;
}
