import { existsSync } from 'fs'
import fs from 'fs/promises'
import path from 'path'
// import fsn from 'fsn'

let files = await fs.readdir("C:\\computer graphics lab")
console.log(files)


async function selfiles(files)
{
    let f = 0
    let b = "C:\\computer graphics lab"
    for(const ele of files)
    {
        let x = ele.split(".")[ele.split(".").length-1]
     // let x = ele.split(".")[ele.split(".").length-1]
            if(existsSync(path.join(b,x)))
            {
                await fs.rename(path.join(b,ele),path.join(b,x,ele))
            }
            else{
                await fs.mkdir(path.join(b,x)) 
                await fs.rename(path.join(b,ele),path.join(b,x,ele))
            }
            // console.log(x)
        }
    }
    selfiles(files)
    // return new Promise((resolve,reject)=>{
    //     if(f==2)
    //     {
    //         resolve("no error found")
    //     }
    //     else{
    //         reject("files are suspicious")
    //     }
    // })
// let result = await selfiles(files)
// console.log(result)
// try {
//     console.log("error aa gya ji")
// }catch(error) {
//     console.log("no error yr chill")
// }