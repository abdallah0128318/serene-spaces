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


// here are our routes "treat them as middleware functions as they are executed during thje request-response 
// cycle and each function can end the request-respopnse cycle"

app.use('/users', userRouter)
app.use('/auth', authRouter)

// here is a middleare function to format the json response if there is an error
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Eerver Error"
    res.json({success: false, statusCode, message})
})



