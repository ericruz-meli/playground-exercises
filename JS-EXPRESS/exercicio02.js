let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

// adiciona id exclusivo comecando de 1
function insertIds(arr) {
    return arr.map((p, index) => {
        p.id = index + 1
        return p
    })
}
insertIds(products)
// imprime o nome de cada produto
function printNames(arr) {
    arr.forEach(({ name }) => console.log(name))

}
printNames(products)

// imprime o produto com id 3
function printById(arr, idToCompare) {
    console.log(arr.find(({ id }) => id === idToCompare))

}

printById(products, 3)

// imprima os produtos com a cor black
function printByColor(arr, color) {
    console.log(arr.filter(({colors}) => colors.includes(color)))
}

printByColor(products, 'black')

// imprima os produtos sem cor
function printAllWithoutColor(arr) {
    console.log(arr.filter(({ colors }) => !colors.length))
}

printAllWithoutColor(products)