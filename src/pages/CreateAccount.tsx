import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api/api"

const USER_URL = '/users'

const CreateAccount = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')

    const navigate = useNavigate()

    const validEmail = /\S+@\S+\.\S+/.test(email)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newUser = {name, lastName, email, password, country}
        await api.post(USER_URL, newUser)
        navigate('/feed')
    }
    
    const checkForm = (name != "") && (lastName != "") && validEmail && (password.length > 8) && (country != "")
    return (
        <>
            <section className="grid place-items-center p-9">
            <h1 className="text-3xl mb-6">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-4 w-1/3">
                <input 
                    type="text" 
                    id="firstName" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                    placeholder="Firstname"
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 h-14 placeholder:text-violet-400"
                />          
                <input 
                    type="text" 
                    id="lastName" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    required
                    placeholder="Lastname"
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 h-14 placeholder:text-violet-400"
                />
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email"
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 h-14 placeholder:text-violet-400"
                />
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                    placeholder="Password"
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 h-14 placeholder:text-violet-400"
                />
                <label className="grid" htmlFor="country">Country:
                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="active:text-xl bg-transparent px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 h-14">
                        <option value=""></option>
                        <option value="Germany">Germany</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Turkey">Turkey</option>
                        <option value="USA">USA</option>
                    </select>
                </label>
                <button className="text-white text-lg w-2/3 place-self-center bg-green m-7 p-3 rounded-lg disabled:opacity-30" type="submit" disabled={!checkForm} >Create Account</button>
            </form>
            </section>
        </>
    )
    
}

export default CreateAccount