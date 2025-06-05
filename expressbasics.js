const express = require('express')
const app = express()
const port = 3000


app.get('/blog/:slug/',(req,res)=>{

    res.send(`hello ${req.params.slug}`)
})

app.get('/blog',(req,res)=>{

    res.send('hello world2323')
})

// app.get('/',(req,res)=>{

//     res.send('hello world2323')
// })

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})