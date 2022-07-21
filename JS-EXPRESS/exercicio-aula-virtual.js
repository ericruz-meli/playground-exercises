let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white']},
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red']},
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black']},
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white','black','blue']},
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black']},
    { name: 'USB adaptor', price: 5, quantity: 0, colors: []},
    {name: 'Keyboard', price: 30, quantity: 35, colors: ['white']},
    {name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'white']},
    { name: 'Monitor', price: 200, quantity: 3, colors: []}
]

// adiciona elemento ao array
products.push({ name: 'abc', price: 2, quantity: 1, colors: []})

// remove elementos sem estoque
products = products.filter(({ quantity }) => quantity)

// imprima a soma do estoque
console.log(products.reduce((acc, { quantity }) => acc + quantity, 0))

// imprima com maior valor que passado
const printProdBiggerThan = (value) => {
    console.log(products.filter((({ price }) => price > value)))    
}

printProdBiggerThan(5)

// imprima quem inclui a letra
const printProdWithLetter = (letter) => {
    console.log(products.filter((({ name }) => name.includes(letter))))    
}

printProdWithLetter('o')
