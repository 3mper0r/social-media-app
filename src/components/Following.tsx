import { Link } from 'react-router-dom'
import {users} from '../../db/db.json'

const Following = () => {
   
  return (
    <>
    <aside className='inline-grid'>
        <span>People you follow</span>
    
    {users.map((people) => (
        <ul key={people.id} className='grid grid-cols-1'>
           {people.following?.followingUsers.map(user => (
               <li key={user}>{user}</li>
                )
           )}
        </ul>
        ))
    }
    </aside>
    </>
  )
}

export default Following