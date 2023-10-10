import {users} from '../../db/db.json'
import useAuth from '../hooks/useAuth'

const Following = () => {

  const {userName}: any = useAuth()  
  
  const usersList = users.map(user => user)
  
  return (
    <>
    <aside className='bg-green p-3 inline-grid'>
      <span className='text-xl'>People you follow</span>
      <ul>
        {
          userName ? usersList.filter(user => user === userName).map(followList => 
            ( 
              <li className="font-light grid grid-flow-col" key={userName.id}>{followList.following?.followingUsers.toString()}</li>
            )  
          ) : ""    
        }
      </ul>
    </aside>
    </>
  )
}

export default Following