import { useState,useMemo,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { countercontext } from './context/context'


const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index:i,
    isMagical:i===29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const getadjective = useCallback(()=>{
  return "hello!" + count
  },[count])
  // const num = nums.find(item=>item.isMagical==true)//bht jyada expensive computation hoga kyuki har baar jb page render hoga toh ye rn krega jise react app lag krega
  const [number, setnumber] = useState(nums)
  const num = useMemo(() => number.find(item=>item.isMagical==true), [number])//isme usememo se "meoise" ho jyga ar srf ek baar chlega jb number change ho 
  return (
    <>
    <div>Magical number is : {num.index}</div>
    <countercontext.Provider value={{count,setCount}}>
    <Navbar adjective={"you are good"} getadjective={getadjective}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1); 
        if(count===15){ setnumber(new Array(10_000_000).fill(0).map((_,i)=>{
                  return{
                  index:i,
                  isMagical:i===9_000_000
                  }
                  }))
                }
            }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </countercontext.Provider>
    </>
  )
}

export default App
