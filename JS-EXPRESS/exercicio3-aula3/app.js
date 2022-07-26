const express = require('express')
const route = require('./routes')

const app = express() 

app.use(express.json())
app.use('/api', route)

app.listen('3000')