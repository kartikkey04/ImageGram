import express from 'express';
import connectDB from './config/dbConfig.js';

const app = express();

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is listning at ${PORT}`);
    connectDB();
})