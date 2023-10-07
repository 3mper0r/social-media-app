import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <>
        <h1>Welcome to WeMedia</h1>
        <Link to={'/create'}><p>Connect with your freinds now {"-->"}</p></Link>
        <Link to={'/login'}><p>Already registered? Click to login{"-->"}</p></Link>

    </>
  )
}

export default Welcome