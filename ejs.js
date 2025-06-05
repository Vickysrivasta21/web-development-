const express = require("express")
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/',(req,res)=>{
     let name = "adidas"
    let content = "why to use"
    let arr = [1,33,44,32,556]
    res.render("index", {name: name,content: content, arr})
})
app.get('/',(req,res)=>{
    let name = "adidas"
    let content = "why to use"
    res.send("hello world!")
})

app.listen(port,()=>{
    console.log(`example listening to port 3000`)
})