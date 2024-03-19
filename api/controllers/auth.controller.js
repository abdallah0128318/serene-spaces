const User = require('../models/user.model')
const bcryptjs = require('bcryptjs');


const signup = (req, res, next)=>{
  const {username, email, password} = req.body;
  const encryptedPassword = bcryptjs.hashSync(password)
  const newUser = new User({username, email, password: encryptedPassword})
  newUser.save().then(data => {
    res.status(200).json(data)
  }).catch(err => next(err))
}









module.exports = {
    signup
}