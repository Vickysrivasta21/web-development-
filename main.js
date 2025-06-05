const fs = require("fs")

console.log(fs)

console.log("starting")
fs.writeFile("harry.txt","harry is good boy",()=>{
    console.log("done")
    fs.readFile("harry.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
console.log("ending")