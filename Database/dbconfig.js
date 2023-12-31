import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dbURL = process.env.MNGODBCONNECTION

const dbConnect = async()=>{
        try {
            const connection = await mongoose.connect(dbURL)
            console.log("Mongo DB conected")
            return connection;
        } catch (error) {
            console.log('DB connection error',error);
        }
}

export default dbConnect;