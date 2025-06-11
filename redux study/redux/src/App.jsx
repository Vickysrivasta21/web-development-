import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector,useDispatch } from 'react-redux' //state hai react hook ke
import { increment,decrement } from './redux/counter/counterslice'

function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
    <Navbar/>
      <div>
        <button onClick={()=>dispatch(decrement())}>subtract - </button>
        currently count is {count}
        <button onClick={()=>dispatch(increment())}>addition +</button>
      </div>
    </>
  )
}

export default App
