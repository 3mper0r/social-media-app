import { useState } from 'react';
import {users, posts} from '../../db/db.json'
import useAuth from '../hooks/useAuth';

interface User {
    id: number;
    name: string;
    lastname: string;
    email: string;
    country: string;
}

const Profile = () => {
    //const [user, setUser] = useState('')
    const { auth }:any = useAuth()
    return (
        <>
            <h2 className='my-profile'>{auth.name}</h2>
            
            <span></span>
            <span></span>
        </>
    )
}

export default Profile

