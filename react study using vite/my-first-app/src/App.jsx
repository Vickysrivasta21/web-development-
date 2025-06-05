// import './App.css'
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import { useState,useEffect,useRef } from 'react';
function App() {
  const [count, setCount] = useState(0) //count is state and usestate helps to update its value using setcount function
  const x = useRef(0)
  useEffect(() => {
    x.current = x.current + 1
    console.log(`count was changed to ${x.current}`)
  })
  const[btn,showbtn] = useState(true)

  // useEffect(() => {
  //   alert("hello count was changed")
  
  // }, [count])
  const [form, setform] = useState({name:""})
  const changename = (e)=>{
        setform({...form,[e.target.name]:e.target.value})
        console.log(form)
  }

  return (
    <>
      <Navbar/>
      <div className="count">the count is : {count}</div>
      <div className="input"><input type="text" name='name' value={form.name} onChange={changename} /></div>
      <div className="btn"><button onClick={()=>{showbtn(!btn), setCount(count+1)}}>click me!</button></div> 
      {btn&&<button>false hu toh thenga dikhega</button>}
      <div className="cards">
      <Card title = "card 1" description = "this is card 1"/>
      <Card title = "card 2" description = "this is card 2"/>
      <Card title ="card 3" description = "this is card 3"/>
      <Card title ="card 4" description = "this is card 4"/>
      <Card title ="card 5" description = "this is card 5"/>
      </div>
      <Footer/>
    </>
  )
} 

export default App
