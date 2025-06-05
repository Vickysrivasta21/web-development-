import mongoose from 'mongoose';
import express from 'express';
import  {todo}  from './models/todo.js'

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const Todo = new todo({ title: "1", desc: "my name", isDone: false, days:10 })
    Todo.save()
    res.send("hello world")
})

app.listen(port, () => {
    console.log("listening to port 3000")
})