"use server"
import fs from 'fs/promises'
export const submitaction = async(e)=>{
     console.log(e.get('username'),e.get("address"))
     let a = await fs.writeFile("avnish.txt",`hey i am ${e.get("username")}`)
    //  console.log(a)
  }