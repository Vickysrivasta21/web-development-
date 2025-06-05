const express = require('express')
const app = express()
const port = 3000
// app.use(express.static("public"))

app.use((req,res,next)=>{
    console.log(`${Date.now()} is the time of ${req.method}`)
    next()
})

app.use((req,res,next)=>{
    console.log('middleware2')
    next()
})

app.get('/',(req,res)=>{
    console.log("hey its a get request!!")
    res.send('hello world232276')
})
app.post('/',(req,res)=>{
    console.log("hey its a post request")
    res.send('hello world post')
}).put('/',(req,res)=>{
    console.log("hey its a put request")
    res.send('hello world put')
}).delete('/',(req,res)=>{
    console.log("hey its a delete request")
    res.send('hello world delete')
})

app.get('/index',(req,res)=>{
    console.log("hey its hello index")
    res.sendFile('template/index.html',{root: __dirname})
})
app.get('/api',(req,res)=>{
    // console.log("hey its hello index")
    res.json({a: 1,b: 2,c: 3,d: 4})
})

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})