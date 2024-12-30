import React, { createContext, useState, useContext} from "react";

interface AuthContextProps {
    // username
    username : string | null;
    setUsername : (username: string) => void;
    // user_id
    user_id : number | null;
    setUser_id : (user_id: number) => void
}

const AuthContext = createContext<AuthContextProps | undefined> (undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [username, setUsername] = useState<string | null> (null)
    const [user_id, setUser_id] = useState<number | null> (null)
    
    console.log('AuthProvider Rendered')
    console.log('Current Username: ', username)
    console.log('Current User id: ', user_id)

    return (
        <AuthContext.Provider value={{ username, user_id, setUsername, setUser_id }}>
            { children } 
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}