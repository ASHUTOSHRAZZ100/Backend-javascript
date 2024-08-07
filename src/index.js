// require('dotenv').config({path : './env'})
// import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from './constants.js'
import connectDB from './db/index.js'
import express from 'express'
const app = express();



// method 1 to connect to mongoDB

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MongoDB is connect sccessfully')
        app.on('error',(error)=>{
            console.log("ERROR1 : ",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.error('ERROR : ', error);
        throw error;
    }
})();