const User = require('../models/user.model')
const bcryptjs = require('bcryptjs');
const {userValidation} = require('../utils/validation.js')


exports.signup = async (req, res, next)=>{
    const errors = await userValidation(User, req.body)
    if(!errors)
    {
        const {username, email, password} = req.body;
        const hashedPassword = bcryptjs.hashSync(password)
        const user = await User.create({username, email, password:hashedPassword});
        res.status(201).json(user);
    }
    else{
        res.status(401).json(errors);
    }   
}

