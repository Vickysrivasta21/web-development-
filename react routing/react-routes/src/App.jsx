import { useState } from 'react'
import Navbar from './components/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Username from './components/Username'

function App() {
  const router = createBrowserRouter([
    {path:'/'
      ,element: <><Navbar/><Home/></>
    },
    {
      path:"/login",
      element: <><Navbar/><Login/></>
    },
    {
      path:"/username/:username",
      element:<><Navbar/><Username/></>
    },
  ])

  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
