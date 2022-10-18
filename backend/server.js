import express, { application } from 'express';
import mongoose from'mongoose'
import cors from'cors'
import dotenv from 'dotenv'
import router from './routes/index.js'
import connection from './mongoDB/conection.js'
dotenv.config()
const PORT =process.env.PORT || 4000


const app = express()
//middleware
app.use(cors())
app.use(express.json())
app.use('/api/v1',router)



const start =async()=>{

  connection()
  app.listen(PORT,()=>{
    console.log('server is running on port:'+ PORT)
  })

}

start()

