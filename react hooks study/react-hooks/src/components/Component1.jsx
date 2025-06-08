import React,{useContext} from 'react'
import { countercontext } from '../context/context'

const Component1 = () => {
  const value = useContext(countercontext)
  return (
    <div>
      im am component {value.count}
      <button onClick={()=>value.setCount((count)=>count+1)}>click me</button>
    </div>
  )
}

export default Component1
