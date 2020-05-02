const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const users =  require('../users/users-model')
const restrict = require('./authenticate-middleware')

const router = require('express').Router()

router.post('/register', async (req, res, next) => {
  try {
    const  { username } = req.body
    const user = await users.findBy({ usersname }).first()

    if(user) {
      return res.status(409).json({
        message: "Username is taken. Try another.",
      })
    }

    res.status(201).json(await users.add(req.body))
  } catch(err) {
    next(err)
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await users.findBy({ username }).first()
    const passwordValid = await bcrypt.compare(password, user.password)

    if (!user || !passwordValid) {
      return res.status(401).json({
        message: "Invalid Credentials",
      })
    }
    const payload = {
      userId: user.id,
      userRole: "normal"
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET)

    res.cookie('token', token)
    res.json({
      message: `Welcome ${user.username}!`,
    })
  } catch(err) {
    nex(err)
  }
});

module.exports = router;
