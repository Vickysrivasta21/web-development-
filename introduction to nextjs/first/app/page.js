// "use client"
import Image from "next/image";
import fs from 'fs/promises'
// import { useState } from "react";

export default function Home() {
  console.log("i am avnish")
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  // const [count,setCount] = useState(0)
  return (
    <div>
      <div>i am homepage</div>
      {/* <div>count is {count}</div> */}
      {/* <button onClick={()=>setCount(count+1)}>click me!</button> */}
      <div className="text-xl bg-cyan-400">Next js ka jadu</div>
      <ul>
        <li>file based routing</li>
        <li>full stack solution</li>
        <li>additional features like router</li>
        <li>optimised rendering</li>
      </ul>
    </div>
  );
}
