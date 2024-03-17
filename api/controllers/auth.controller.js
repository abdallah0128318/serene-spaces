const User = require('../models/user.model')
const bcryptjs = require('bcryptjs');
const signup = (req, res)=>{
  const {username, email, password} = req.body;
  const encryptedPassword = bcryptjs.hashSync(password)
  const newUser = new User({username, email, password: encryptedPassword})
  newUser.save().then(data => {
    res.status(200).json(data)
  }).catch(err => res.status(500).json(err.message))
}

module.exports = {
    signup
}