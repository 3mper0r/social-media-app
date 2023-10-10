import { createContext, ReactNode, useState } from "react";
import {users} from '../../db/db.json'

interface ChildrenProps {
    children: ReactNode
}

const AuthContext = createContext({})


export const AuthProvider = ({children}: ChildrenProps) => {

    const [auth, setAuth] = useState({email:''})

    const usersEmail = auth.email

    const usersList = users.map(user => user)
    const userName = usersList.find(email => email.email === usersEmail)
   
    return (
        <AuthContext.Provider value={{auth, setAuth, usersList, userName}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext