import mongoose from 'mongoose';

const dataschema = new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManagar:Boolean
})

export const data = mongoose.model('mongooseschema',dataschema)