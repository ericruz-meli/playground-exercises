const express = require('express')

const app = express()

app.use(express.json())

let products  = [
    {id: 0, name: 'a', quantity: 5}
]

app.get('/', (_req, res) => {
    return res.json(products)
})

app.post('/', (req, res) => {
    console.log(req.body.length);
    if(  req.body.length !== 4) {
        return res.json('Invalid quantity')
    }
    req.body.forEach((prod) => {
        const tamanho = products.length
        prod.id = products.length
        products.push(prod)
    })
    return res.json(products)
})

app.put('/', (req, res) => {
    const { id } = req.body
    const index = products.findIndex((prod) => prod.id === id)
    products[index] = {
        ...products[index],
        ...req.body
    }
    return res.json(products)

})

app.delete('/:id', (req, res) => {
    const { id } = req.params
console.log(req.params);
    products = products.filter((prod) => prod.id !== +id)
    return res.json(products)
})

app.listen('3000')