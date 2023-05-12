import { useRoutes, Link } from "react-router-dom";
import router from "./router"
function App() {
  const outlet = useRoutes(router)
  return (
    <div className='app'>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      {/* <Outlet></Outlet> */}
      {outlet}
    </div>
  )
}

export default App
