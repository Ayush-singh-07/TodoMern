import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
import router from './routes/web.js' 
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
// app.use(express.json());
app.use(express.json());
app.use(cors());
app.use('/api',router );


dotenv.config();
connectDB(process.env.DB_URL)
.then(()=>{console.log("DB connected !")})
.catch(err => {console.log(err)})





app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running on 8000");
})