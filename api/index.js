const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user.model')
const userRouter = require('./routes/user.route')
const authRouter = require('./routes/auth.route')
// create an express app
const app = express()
// configure the serv er to receive json data
app.use(express.json())
// initialize 'dotenv' package
dotenv.config()
// connect to mongodb then listen to requests
mongoose.connect(process.env.MONGO_CONN_STR).then(data => {
    app.listen(3000, ()=>{
        console.log('server starts at port 3000');
    })
}).catch(err => console.log(err))


app.use('/users', userRouter)
app.use('/auth', authRouter)

