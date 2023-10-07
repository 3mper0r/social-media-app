import { createContext, ReactNode, useState } from "react";

interface ChildrenProps {
    children: ReactNode
}

const AuthContext = createContext({})


export const AuthProvider = ({children}: ChildrenProps) => {
    const [name, setName] = useState({})

    return (
        <AuthContext.Provider value={{name, setName }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext