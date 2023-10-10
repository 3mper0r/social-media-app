import { createContext, ReactNode, useState } from "react";

interface ChildrenProps {
    children: ReactNode
}

const AuthContext = createContext({})


export const AuthProvider = ({children}: ChildrenProps) => {
    const [auth, setAuth] = useState({name: '', country:''})
    // const [user, setUser] = useState('')
    const [name, setName] = useState(auth.name)
    const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    const [country, setCountry] = useState(auth.country)

    return (
        <AuthContext.Provider value={{auth, setAuth, name, setName, lastName, country, setLastName, setCountry}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext