"use client"
import Image from "next/image";
// import fs from 'fs/promises'
// import { useState } from "react";

export default function Home() {
  // console.log("i am avnish")
  // let a = fs.readFile(".gitignore")
  // a.then(e=>{console.log(e.toString())})
  // const [count,setCount] = useState(0)
  const handleclick = async()=>{
    let data = {
      name:"AVNISH",
      age:22,
      gender:"male"
    }
    let a = await fetch("/api/add",{ method:"POST",headers:{"content-typr":"application/json"},body:JSON.stringify(data)})
    let b = await a.json() 
    console.log(b)
  }
  return (
    <div className="h-full w-full m-auto p-3">
      <div>i am homepage</div>
      {/* <div>count is {count}</div> */}
      {/* <button onClick={()=>setCount(count+1)}>click me!</button> */}
      <div className="api text-xl to-blue-400 self-center">
        next js api routes demo
        <button onClick={handleclick}>click me</button>
      </div>
      <div className="text-xl">Next js ka jadu</div>
      <ul>
        <li>file based routing</li>
        <li>full stack solution</li>
        <li>additional features like router</li>
        <li>optimised rendering</li>
      </ul>
      <div className="w-4/5 m-auto p-2.5">
        <Image src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" height={200} width={400} className="w-full m-auto mx-auto" />
      </div>
    </div>
  );
}
