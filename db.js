import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGODB_URI;
const connection = mongoose.connect(url);
export default connection;




