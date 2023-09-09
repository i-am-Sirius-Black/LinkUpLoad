import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async()=>{
    const MONGO_URI = process.env.MONGO_URL;
    try{
        await mongoose.connect(MONGO_URI, {useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch(error){
        console.log("Failed to connect to MongoDB", error.message);
    }
};

export default DBConnection;