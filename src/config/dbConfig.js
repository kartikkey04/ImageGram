import mongoose from "mongoose";
import  {DB_URI}  from "./serverConfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(DB_URI);
        console.log("Connected to mongoDB");
        
    }catch(error){
        console.log("Something went wrong while connecting to MongoDB");
        console.log(error);
    }
}
