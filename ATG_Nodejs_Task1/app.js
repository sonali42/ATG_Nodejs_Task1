const express = require('express')
require('dotenv').config();

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    return res.status(200).send({message: "welcome" , status:true})
})

const authRouters = require('./routes/auth_route')
app.use('/auth',authRouters);

module.exports={app};