const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// initialize 'dotenv' package
dotenv.config()
// create an express app
const app = express()
// connect to mongodb then listen to requests
mongoose.connect(process.env.MONGO_CONN_STR).then(data => {
    app.listen(3000, ()=>{
        console.log('server starts at port 3000');
    })
}).catch(err => console.log(err))


