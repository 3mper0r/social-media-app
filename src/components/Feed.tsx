import useAuth from "../hooks/useAuth"
import PostCard from "./PostCard";
import useDarkMode from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

const Feed = () => {

    const {auth}: any = useAuth()
    
    const [isDarkMode, toggleDarkMode] = useDarkMode()
    return (
        <>
            <nav className='grid bg-blue text-white p-4 text-center'>See what's new today!
                <button onClick={toggleDarkMode}><i className={isDarkMode ? 'text-amber-400 fas fa-moon' : 'text-white fas fa-moon'}></i></button>
                <button><Link to="/myprofile">My Profile {auth?.email}</Link></button> 
            </nav>
            <PostCard/> 
        </>
    )
        
}

export default Feed