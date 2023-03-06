const express = require('express')
const connectDb = require('../middleware/mongoDB')
const router = express.Router()

router.use((req, res, next) => {
    connectDb();
    next()
  })

module.exports = router