const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const users = require('../users/users-model')

const restrict = () => {
  const authError = {
    message: "invalid Credentials",
  }

  return async (req, res, next) => {
    try {
      const { token } = req.cookies
      if(!token) {
        return res.status(401).json(authError)
      }
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json(authError)
        }

        req.token = decoded
        console.log(decoded)

        next()

      })
    } catch(err) {
      next(err)
    }
  }
}

module.exports = restrict;
