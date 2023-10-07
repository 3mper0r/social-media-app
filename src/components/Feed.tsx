import { useState } from "react"
import Profile from "./Profile"

const Feed = () => {

    const [user, setUser] = useState(null)
    const logedIn = <h1>`Hello ${user}`</h1>
    const notLoggedIn = `You must login first`
    return (
        <>
        {user ? logedIn : notLoggedIn}
        <Profile/>
        </>
    )
        
}

export default Feed