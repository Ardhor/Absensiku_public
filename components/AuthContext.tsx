import React, { createContext, useState, useContext} from "react";

interface AuthContextProps {
    username : string | null;
    setUsername : (id: string) => void;
}

const AuthContext = createContext<AuthContextProps | undefined> (undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [username, setUsername] = useState<string | null> (null)
    
    console.log('AuthProvider Rendered')
    console.log('Current Username: ', username)
    return (
        <AuthContext.Provider value={{ username, setUsername }}>
            { children } 
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}