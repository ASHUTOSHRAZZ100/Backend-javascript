// require('dotenv').config({path : './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path : './env'
})


// method 2 to connect Mongodb
connectDB()









// method 1 to connect to mongoDB

/*(async () => {
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
})();*/