import { useState } from "react";
import useAuth from "../hooks/useAuth";
import {users} from '../../db/db.json'



const Profile = () => {  

    const {auth}: any = useAuth()  
    
    return (
        <aside className='bg-blue grid-cols-1 min-h-screen'>
            <section className="grid text-xl text-white gap-4 place-content-center">
            <h1 className='text-4xl text-white py-12'>My Profile</h1>
                <span>Name: {}</span>
                <span>Lastname: {}</span>
                <span>Email: {auth?.email}</span>
                <span>Country: {}</span>
            </section>
        </aside> 
    )
}

export default Profile

