const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = 2222;
const {MONGOURI} = require('./keys');

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})