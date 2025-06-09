import React,{memo} from 'react'
import Component1 from './Component1'

const Navbar = ({adjective,getadjective}) => {
  console.log("hellow world")
  return (
    <>
    <div>
      i am good and {adjective}
      <button onClick={()=>{getadjective()}}>
           {getadjective()}
      </button>
    </div>
    <Component1/>
    </>
  )
}

export default memo(Navbar)