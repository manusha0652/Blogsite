import express from 'express'
import mongoose from 'mongoose'
import Dotenv  from 'dotenv';
Dotenv.config();
mongoose
.connect(process.env.MONGO)
.then(()=>{
  console.log('mongodb is connected');  
}
)
.catch((err)=>{
    console.log(err);
});
const app=express();

app.listen(3001,()=>{
    console.log('server is running on port 3001');
});