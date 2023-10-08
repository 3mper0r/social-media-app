import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import RequireAuth from './components/RequireAuth'
import Feed from './components/Feed'
import Profile from './components/Profile'

function App() {
 
  return (
    <>
      <Routes>
        <Route index element={<Welcome/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateAccount/>} />
        <Route path="/feed" element={<Feed />}/>
        <Route element={<RequireAuth/>}> 
          <Route path="/profile" element={<Profile />}/>
        </Route>
      </Routes>
       
    </>
  )
}

export default App
