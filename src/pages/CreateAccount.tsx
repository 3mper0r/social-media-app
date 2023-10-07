import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const USER_URL = 'http://localhost:3000/profile'

const CreateAccount = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const newUser = {name, lastName, email, password, country}
        axios.post(USER_URL,newUser)
        navigate('/feed')
    }

    
    const checkForm = (name != "") && (lastName != "") && (email != "") && (password != "") && (country != "")
    return (
        <>
            <form>
                <label htmlFor="firstName">Firstname:
                    <input 
                        type="text" 
                        name="firstName" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </label>
                <label htmlFor="lastName">Lastname:
                    <input 
                        type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required
                    />
                </label>
                <label htmlFor="email">Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </label>
                <label htmlFor="password">Password:
                    <input 
                        type="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                         />
                </label>
                <label htmlFor="country">Country:
                    <select name="" id="" value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value=""></option>
                        <option value="Germany">Germany</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Turkey">Turkey</option>
                        <option value="USA">USA</option>
                    </select>
                </label>
                <button disabled={!checkForm} onClick={handleSubmit}>Create Account</button>
            </form>
        </>
    )
    
}

export default CreateAccount