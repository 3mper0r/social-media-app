import { createContext, ReactNode, useState } from "react";

interface ChildrenProps {
    children: ReactNode
}

const AuthContext = createContext({})


export const AuthProvider = ({children}: ChildrenProps) => {
    const [auth, setAuth] = useState({name: '', email: '', country: ''})
    // const [user, setUser] = useState('')
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [country, setCountry] = useState('')

    return (
        <AuthContext.Provider value={{auth, setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext