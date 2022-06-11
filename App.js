'use strict';

const express = require('express')
const app = express()
const port = 3000

let spiritName = require( './routes/inventory');

app.get('/', (req, res) => {
  res.send(`Hello World! The spirit chosen is ${spiritName}. Add some [incoming herb name] to it!` )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

