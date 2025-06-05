import { useState,useEffect,useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [complete,setcomplete] = useState([])
  const [des,nodesc] = useState(false)
  const [data,setdata ] = useState([])
  const [task,settask] = useState("")
  const [date,setdate] = useState("")
  const [priority,setpriority] = useState("HIGH")
  const [desc,setdesc] = useState("")
  function setvalue()
  {
    const update = {
      id:Date.now(),
      task:task,
      date:date,
      priority:priority,
      priorityid:assignpriority(priority),
      description:desc
    };
    const newdata = [...data,update];
    newdata.sort((a,b)=>{return a.priorityid-b.priorityid})
    localStorage.setItem("pendingtask",JSON.stringify(newdata))
    setdata(newdata)
    settask("")
    setdate("")
    setpriority("HIGH")
    setdesc("")
  }
  useEffect(() => {
    const data = localStorage.getItem("pendingtask")
    if(data)
    {
    const parsed = JSON.parse(data)
    setdata(parsed)
    }

    const complete = localStorage.getItem("completedtask")
    if(complete)
    {
      const parsed = JSON.parse(complete)
      setcomplete(parsed)
    }
  }, [])
  
  function assignpriority(value)
  {
    if(value=="HIGH")
    {
      return 1;
    }
    else if(value=="MEDIUM")
    {
      return 2;
    }
    else{
      return 3;
    }
  }
  function setcompletetask(e,id)
  {
      const newele = {
        id:id,
        task:e.task,
        date:e.date,
        priority:e.priority,
        priorityid:assignpriority(e.priority),
        description:e.description
      }
      const completedata = [...complete,newele]
      completedata.sort((a,b)=>{return a.priorityid-b.priorityid})
      localStorage.setItem("completedtask",JSON.stringify(completedata))
      setcomplete(completedata)
      setdata(prev=>{const ndata = prev.filter((ele)=>
        ele.id!==id)
        localStorage.setItem("pendingtask",JSON.stringify(ndata))
        return ndata
      })
  }
  function clearimmediate()
  {
    localStorage.removeItem("pendingtask")
    localStorage.removeItem("completedtask")
    setdata([])
    setcomplete([])
  }
  return (
    <>
    <div className="cont">
      <div className="todo">TODO LIST APP</div>
      <div className="inputpanel">
          <div className="task">
          <label htmlFor="task"> enter task </label>
          <input className='taskenter' type="text" value = {task} onChange={e=>{settask(e.target.value)}}/>
          </div>
          <div className="date">
          <label htmlFor="date"> enter the date </label>
          <input className='dates' type="date" value={date} name="date" id="date" onChange={e=>{setdate(e.target.value)}}/>
          </div>
          <div className="priority">
          <label htmlFor="priority"> Select the task Priority </label>
          <select name="priority" id="select priority" value={priority} onChange={e=>{setpriority(e.target.value)}}>
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
          </div>

          <div className="description">
            <div className="first">
            do you want to add any description of task?

            <button onClick={()=>nodesc(prev=>!prev)}>yes</button>
            </div>
            <div className="second">
            <textarea name="description" value={desc} id="description" style={{display:des? 'block':"none"}} onChange={e=>{setdesc(e.target.value)}}>enter the description of task</textarea>
            </div>
          </div>
          <div className="addbutton">
          <button onClick={setvalue}>ADD TASK</button>
          </div>
        </div>
      <div className="below">
      <div className="pending">All Pending Task : {data.length}
         {
          data.map((ele,index)=>{
             return(
               <div className="taskcontainer">
                <div className="number">Task No. : {index +1}</div>
                <div className="seperate">
              <div className="taskid">Task Id : {ele.id}</div>
              <div className="task">Task : {ele.task}</div>
              <div className="date">Date : {ele.date}</div>
              <div className={`priority ${ele.priority}`}>Priority : {ele.priority}</div>
              {/* <div className="priorityid">priorityid : {ele.priorityid}</div> */}
              <div className="description">Description : {ele.description==""?"no description available":ele.description}</div>
              </div>
              <div className="icons">
                <div className="check"><input type="checkbox" name="completed" id="check" onChange={()=>setcompletetask(ele,ele.id)}/></div>
              </div>
              </div>
            )
          })
         }

      </div>
      <div className="completed">All Complete Task : {complete.length}
         {
          complete.map((ele,index)=>{
             return(
               <div className="taskcontainer">
                <div className="number">Completed Task No. : {index +1}</div>
                <div className="seperate">
              <div className="taskid">Task Id : {ele.id}</div>
              <div className="task">Task : {ele.task}</div>
              <div className="date">Date : {ele.date}</div>
              <div className={`priority ${ele.priority}`}>Priority : {ele.priority}</div>
              {/* <div className="priorityid">priorityid : {ele.priorityid}</div> */}
              <div className="description">Description : {ele.description==""?"no description available":ele.description}</div>
              </div>
              <div className="iconcomplete"><img src="src\assets\images.png" alt=""/>
              </div>
              </div>
            )
          })
         }</div>
      </div>
      <div className="buttonclr"><button onClick={clearimmediate}>CLEAR ALL DATA</button></div>
    </div>
    </>
  )
}

export default App