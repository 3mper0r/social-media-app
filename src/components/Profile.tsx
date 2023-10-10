import useAuth from "../hooks/useAuth";

const Profile = () => {  

    const {auth, userName}: any = useAuth()  
    
    return (
        <aside className='bg-blue grid-cols-1 min-h-screen'>
            <section className="grid text-xl text-white gap-4 place-content-center">
            <h1 className='text-4xl text-white py-12'>My Profile</h1>
                <span>Name: {auth ? userName?.name : 'not signed In'}</span>
                <span>Lastname: {auth ? userName?.lastName : "not signed In"}</span>
                <span>Email: {auth?.email}</span>
                <span>Country: {auth ? userName?.country : 'not signed In'}</span>
            </section>
        </aside> 
    )
}

export default Profile

