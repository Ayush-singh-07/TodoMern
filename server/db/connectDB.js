import mongoose from "mongoose";

async function connectDB(DB_URL){
    await mongoose.connect(DB_URL);
}


export default connectDB;