const express = require('express')
const connectDb = require('../middleware/mongoDB')
const router = express.Router()

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
    connectDb();
    next()
  })

module.exports = router