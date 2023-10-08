import { MouseEvent, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import {users} from '../../db/db.json'
import useAuth from "../hooks/useAuth"

const Login = () => {   

    const listOfEmail = users.map(userEmail => userEmail.email)
    const passwordMatch = users.map(userPassword => userPassword.password)
    
    const {setAuth}: any = useAuth()

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<null | string>(null)
    
    const navigate = useNavigate()

    //const checkLogin = () => {listOfEmail.includes(email) && passwordMatch.find(pw => pw === password)}
    
    const handleSubmit = (e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        if(listOfEmail.includes(email) && passwordMatch.find(pw => pw === password))  {
            setAuth({email, password})
            navigate('/feed')
        }
        else setError('Email or Password are invalid')
    }
    return (
        <form className="bg-white grid p-5 rounded-lg"> 
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" className="mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 h-14 placeholder:text-violet-400"/>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 h-14 placeholder:text-violet-400"/>
            
            <button className="text-white text-lg bg-blue m-3 p-3 rounded-lg disabled:opacity-30" onClick={handleSubmit}>Log In</button>
            {error && <span className="text-red-500 text-xl">{error}</span>}          
            <span className="outline outline-1 outline-neutral-200 mt-5"></span>
            <button className="text-white text-lg w-2/3 place-self-center bg-green m-7 p-3 rounded-lg"><Link to="/create">Create new account</Link></button>
        </form>
    )
}

export default Login