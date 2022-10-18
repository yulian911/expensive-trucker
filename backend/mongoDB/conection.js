import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connection_url=process.env.MONGO_DB

const connection =()=>{


  mongoose.connect(connection_url,{
  useUnifiedTopology: true,
})
.then(console.log("connected"))
.catch((err)=>console.log(err))

}
export default connection