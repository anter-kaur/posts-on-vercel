const express=require('express');
const app=express();
const dotenv=require('dotenv');
const addUser=require('./routes/addUser')
const cors=require("cors")

app.use(cors())

const connection=require('./connection')

dotenv.config();
connection(process.env.CONNECT);

app.use(express.json())

app.use('/api/user',addUser)

app.listen(8000,()=>{
    console.log('Server running...')
})