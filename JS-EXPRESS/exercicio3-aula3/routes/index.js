const { Router } = require('express')
const productRouter = require('./products.routes')

const mainRoute = Router()

mainRoute.use( '/products', productRouter)

module.exports = mainRoute