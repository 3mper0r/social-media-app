import { useState } from "react"
import Profile from "./Profile"
import useAuth from "../hooks/useAuth"
import PostCard from "./PostCard";

interface User{
    
    name: string;
    lastname: string;
    email: string;
    country: string;         
   
}
const Feed = ({name}: User) => {

    const {auth}: any = useAuth()
    // const [isLooged, setIsLoggedIn] = useState(null)
    const logedIn = <h1>`Hello user ${name}`</h1>
    const notLoggedIn = <span>You must login first</span>
    return (
        <>
            <nav className='news-feed'>See what's new today!</nav>
            {auth ? logedIn : notLoggedIn}
            <Profile/>
            <PostCard/>
        </>
    )
        
}

export default Feed