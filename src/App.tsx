

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import CreateAccount from './pages/CreateAccount'
import PostCard from './components/PostCard'
import Login from './pages/Login'
import RequireAuth from './components/RequireAuth'
import Feed from './components/Feed'
import Profile from './components/Profile'

function App() {
 
  return (
    <>
      <Routes>
        <Route index element={<Welcome/>} />
        <Route path="/create" element={<CreateAccount/>} />
        <Route path="/login" element={<Login/>}/>
        <Route element={<RequireAuth/>}> 
          <Route path="books" element={<Feed />}/>
          <Route path="books" element={<Profile />}/>
        </Route>
        <Route path="/feed" element={<PostCard/>} />
      </Routes>
       
    </>
  )
}

export default App
