/*
    O Map é um metodo de array que executa a funcao
    e cria um novo array com o retorno da funcao executada
    como a maioria dos metodos de array, Map vai receber uma funcao
    que pode ou nao ser anonima e vai passar para essa funcao 3 parametros,
    lembrando que nao obrigatoriamente vc precisa usar os 3,
    os parametro sendo:
     - 1 parametro: O elemento atual em que esta
     - 2 parametro: o index do elemento atual
     - 3 parametro: o array novamente, caso queira manipular de alguma forma
    mas como seria isso se fossemos tentar replicar ?
    aqui esta um exemplo de uma replica do Map para tentar ajudar no entendimento
*/
// para contexto de simplicidade vou passar o array como parametro para funcao
// para ficar mais facil de entender o caminho
// mas dentro do Array,Map o proprio Map ja tem acesso ao array, atravez do this(no final eu mostro)
function findFunction(array, callback) {
    const newArray = []
    for(let index = 0; index < array.length; index += 1) {
        const elementoAtual = array[index]
        const novoElemento = callback(elementoAtual, index, array)
        newArray.push(novoElemento)
    }
    return newArray
}

let numberList = [1,2,3]

console.log(
    numberList.map((numero) => numero+0.5)
) // retorno: [1.5, 2.5, 3.5]

console.log(
    findFunction(numberList, (numero) => numero+0.5)
) // retorno: [1.5, 2.5, 3.5]
/*
    se voce testar, voce vera que a saida é a mesma, e é basicamente isso
    essa funcao resume o funcionamento do map, simplismente executando
    a callback passada pega o retorno e adiciona em um novo array
    IMPORTANTE: se  o seu array possui 6 posicoes, o retorno do map tambem tera
    lembre-se de quando usar o map, sempre retornar algo, pois ele nao reduz
    ou diminui o numero de elementos do array, nem aumenta, apenas mantem a quantidade
    mudando os valores

    bonus: olha como ficaria a funcao do map que eu fiz se eu fosse
    usar o mesmo formato que é usado na classe Array
*/

/* essa é uma simplificacao da funcionalidade do metodo map,
    o map em si possui varias verificacoes das quais para o exemplo
    so iriam adicionar complexidade */
Array.prototype.map2 = function (callback) {
    const newArray = []
    for(let index = 0; index < this.length; index += 1) {
        const elementoAtual = this[index]
        const novoElemento = callback(elementoAtual, index, this)
        newArray.push(novoElemento)
    }
    return newArray
}

console.log(
    numberList.map((numero) => numero+0.5)
) // retorno: [1.5, 2.5, 3.5]
console.log(
    numberList.map2((numero) => numero+0.5)
) // retorno: [1.5, 2.5, 3.5]

/* espero que para as pessoas curiosas, isso tenha ajudado a saber um pouco mais */