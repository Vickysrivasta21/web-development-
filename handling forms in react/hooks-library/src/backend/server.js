import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/',(req,res)=>{
    res.send("hello world")
    console.log(req.body)
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})