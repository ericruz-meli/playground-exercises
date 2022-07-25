const { Router } = require('express')
const products = require('./products')

let localProducts =[...products]

const productsRouter = Router()

productsRouter.route('/')
    .get((_req, res) => {
        return res.json(localProducts)
    })
    .post((req, res) => {
        const {
            name, price, quantity, colors
        } = req.body

        if(!name || !price || !quantity || !colors) {
            return res.send('Invalid data')
        }

        localProducts = [...localProducts, {name, price, quantity, colors}]
        return res.status(201).json(localProducts)
    })

productsRouter.route('/:id')
    .get((req, res) => {
        const { id } = req.params
        return res.json(products.find((prod) => prod.id === +id))
    })
    .put((req, res) => {
        const { id } = req.params
        const {
            name, price, quantity, colors
        } = req.body

        if(!name || !price || !quantity || !colors) {
            return res.send('Invalid data')
        }
        const newProd = { name, price, quantity, colorsv}
        localProducts = [...localProducts.map((prod) =>
            (prod.id === +id) ? {...prod, ...newProd} : prod
        )]

        return res.json(products.find((prod) => prod.id === +id))
    })
    .delete((req, res) => {
        const { id } = req.params
        localProducts = [...localProducts.filter((prod) => prod.id !== +id)]
        return res.json(products.find((prod) => prod.id === +id))
    })

module.exports = productsRouter