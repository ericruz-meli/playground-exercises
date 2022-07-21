
function calculaPreco(nome, preco) { 
    const mensagem = (custoEnvio) =>
        `O produto ${nome} custa ${preco}. Seu custo de envio ${custoEnvio}. Portanto, o preço final é ${preco + custoEnvio}`
    if (preco < 2001)
        return mensagem(300)
    if (preco)
        return mensagem(450)
    return mensagem(700)
}

console.log(calculaPreco('Macbook', 1500));
console.log(calculaPreco('Macbook', 2500));
console.log(calculaPreco('Macbook', 4500));