const express = require('express')
const getProducts = require('./router/getProduct')
const app = express()
const port = 8080

app.use('/', getProducts)

app.listen(port, () => {
  console.log(`Samosa Delight listening on port ${port}`)
})