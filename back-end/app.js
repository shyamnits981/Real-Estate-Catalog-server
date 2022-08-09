const express = require('express');
const cors = require("cors")
const app = express();
const mongoose = require('mongoose')
const PORT = 2222;
const {MONGOURI} = require('./keys');


app.use(express.json())
app.use(cors());


mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})