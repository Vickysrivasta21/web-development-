import express from 'express';
import mongoose from 'mongoose';
import { data } from './model/mongooseschema.js';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = 3000
app.use(express.json());
async function server() {
    await mongoose.connect('mongodb://localhost:27017/data')
    app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'dummydata.html'))
    })
    app.post('/data', (req, res) => {
        const received = req.body;
        const userdata = new data({ name: received.name, language: received.lang, city: received.city, salary: Math.floor(Math.random() * 45000),})
        userdata.save()
        res.send("dummy data generator")
    })

    app.listen(port, () => {
        console.log("listening to port 3000")
    })
}
server()