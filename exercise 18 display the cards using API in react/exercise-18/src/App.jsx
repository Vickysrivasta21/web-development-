import { useState, useEffect } from 'react'
import './App.css'
// import fs, { readdir } from 'fs/promises'
// import { Container } from 'postcss'
import Navbar from './components/Navbar'

function App() {
  const [display, setdisplay] = useState([])
  const [yes, no] = useState(true)
  useEffect(() => {
    let datadisplay = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts")
      let newdata = await data.json()
      console.log(newdata)
      // console.log(display)
      setdisplay(newdata)
    }
    datadisplay()
  }, [])

  let arr = ['src/components/1_mbkErcaR48EUOiC89zFzxg.png', 'src/components/1005_Design-Patterns-in-React_Cover.png', 'src/components/1678730447651.jpg', 'src/components/Benefits-of-ReactJS.jpg','src/components/How-to-integrate-API-in-ReactJS-1.webp','src/components/images.jpg']


  // useEffect(() => {
  //   console.log(display)
  // }, [display])

  // userId": 1,
  //   "id": 1,
  //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //   "body": "qu
  // datadisplay()

  return (
    <>
      <Navbar />
      <div className='btn'><button onClick={() => { no(!yes) }}>click me to see the magic!</button></div>
      <div className="container" yes={yes}>
        {yes && display.map(ele => {
          return (<div className="datacont">
            <div className="userid">{ele.userId}</div>
            <div className="id">{ele.id}</div>
            <div className="title">{ele.title}</div>
            <div className="body">{ele.body}</div>
            <div className="image"><img src={arr[Math.floor(Math.random()*arr.length)]} alt="" /></div>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default App
