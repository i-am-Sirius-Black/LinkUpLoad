import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
    const MONGO_URI = process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connection established");
    } catch (error) {
        console.log("Error connecting to Database", error.message);
    }
};

export default DBConnection;
