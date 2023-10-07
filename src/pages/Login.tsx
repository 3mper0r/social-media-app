import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    const handleSubmit = (e: any) => {
        e.preventDefault()
        navigate('/feed')
    }

    
    const checkForm = (email != "") && (password != "")

    return (
        <form action="">
            <label htmlFor="email">Email:
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            </label>
            <label htmlFor="password">Password:
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
            </label>
            <button disabled={!checkForm} onClick={handleSubmit}>Log In</button>
        </form>
    )

}

export default Login