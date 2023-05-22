const express = require('express')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');//validation of input body
const router = express.Router()
// password incodeing(hashing)
const bcrypt = require('bcrypt');
// jesonWebTokan
var jwt = require('jsonwebtoken');

const JWT_STR = "doing my work"

// importing middlewere to getuser detals 
const findUserId = require('../middleWere/findUserId')




// ROUTE 1: Create a user using: POST /api/auth/createUser  :dosen't requaire login
router.post('/createUser', [
  //this is an array of validation 
  body('name').isLength({ min: 3 }),
  body('email', 'your email is not valid').isEmail(), //we can send custom err statement 
  body('password').isLength({ min: 5 }),

], async (req, res) => {
  // checking the result is the request have any error or not
  const result = validationResult(req);
  if (result.isEmpty()) {

    // const user = await User(req.body);
    // await user.save()

    // checking is the user alrady exist or not
    let user = await User.findOne({ email: req.body.email });//findOne function is use to object to find

    try {
      if (user) {
        return res.status(400).json({ error: 'user already exist, Try with another email' })

      }

      // this 2 function's gunerate the salt to make password string , converting that password into hash 
      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(req.body.password, salt);

      // generating the jsonWebTokan

      let useR = await User.create({
        name: req.body.name,
        password: hash,
        email: req.body.email
      })

      const data = {
        user: {
          id: useR.id
        }
      }
      const authToken = jwt.sign(data, JWT_STR)
      return res.json({ authToken })

    }
    catch (err) {
      console.log(err.message)
      res.status(500).send("some error accour")
    }
  }

  res.json({ errors: result.array() });
})




// ROUTE 2: Login a user using: POST /api/auth/login  :dosen't requaire auth
router.post('/login', [
  //this is an array of validation 
  body('email', 'your email is not valid').isEmail(), //we can send custom err statement 
  body('password').exists()

], async (req, res) => {
  // checking the result is the request have any error or not
  const result = validationResult(req);
  if (result.isEmpty()) {

    try {
      // const {email, password}=req.body    
      // checking is the user alrady exist or not
      let user = await User.findOne({ email: req.body.email });//findOne function is use to object to find

      if (!user) {
        return res.status(400).json({ message: "use correct U input" })
      }

      if (!await bcrypt.compare(req.body.password, user.password)) {
        return res.status(400).json({ message: "use correct input" })
      }

      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_STR)
      return res.json({ authToken })
    }
    catch (err) {
      console.log(err.message)
      res.status(500).send("some error accour")

    }
  }

  res.json({ errors: result.array() });
})




// ROUTE 3: get loggedIN user details : POST /api/auth/getUser : using post request/
router.post('/getUser', findUserId, async (req, res) => {

  try {
    // this select all data other then password
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  }
  catch (err) {
    console.log(err.message)
    res.status(500).send("some error accour")
  }


})

module.exports = router