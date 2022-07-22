/*
    O find é um metodo de array que executa a funcao
    e espera um true ou false, enquanto for false ele continua 
    executando, quando virar true ele para e retorna o elemento
    como a maioria dos metodos de array, find vai receber uma funcao
    que pode ou nao ser anonima e vai passar para essa funcao 3 parametros,
    lembrando que nao obrigatoriamente vc precisa usar os 3,
    os parametro sendo:
     - 1 parametro: O elemento atual em que esta
     - 2 parametro: o index do elemento atual
     - 3 parametro: o array novamente, caso queira manipular de alguma forma
    mas como seria isso se fossemos tentar replicar ?
    aqui esta um exemplo de uma replica do metodo para tentar ajudar no entendimento
*/
// para contexto de simplicidade vou passar o array como parametro para funcao
// para ficar mais facil de entender o caminho
// mas dentro o proprio metodo ja tem acesso ao array, atravez do this(no final eu mostro)
function findFunction(array, callback) {
    for(let index = 0; index < array.length; index += 1) {
        const elementoAtual = array[index]
        // if so entra para retornar se a funcao retornar true
        if(callback(elementoAtual, index, array)) {
            return elementoAtual
        }
    }
}

let numberList = [1,2,3]

console.log(
    numberList.find((numero) => numero%2 === 0)  // se numero é divisivel por 2
) // retorno: 2

console.log(
    findFunction(numberList, (numero) => numero%2 === 0)
) // retorno: 2
/*
    se voce testar, voce vera que a saida é a mesma, e é basicamente isso
    essa funcao resume o funcionamento, simplismente executando
    a callback passada pega o retorno e verifica se é true
    se for true, retorna o elemento atual
    IMPORTANTE: o metodo find é muito util para poder encontrar um elemento
    mas caso vc so queira saber se um elemento existe, entáo o Array.some 
    seria a melhor escolha, dado que ele funciona da mesma forma, mas ao invez
    de retornar o elemento, só retorna true caso encontre ou false caso nao

    bonus: olha como ficaria a funcao que eu fiz se eu fosse
    usar o mesmo formato que é usado na classe Array
*/

/* essa é uma simplificacao da funcionalidade do metodo,
    o metodo em si possui varias verificacoes das quais para o exemplo
    so iriam adicionar complexidade */
Array.prototype.find2 = function (callback) {
    for(let index = 0; index < this.length; index += 1) {
        const elementoAtual = this[index]
        // if so entra para retornar se a funcao retornar true
        if(callback(elementoAtual, index, this)) {
            return elementoAtual
        }
    }
}

console.log(
    numberList.find((numero) => numero%2 === 0)
) // retorno: 2
console.log(
    numberList.find2((numero) => numero%2 === 0)
) // retorno: 2

/* espero que para as pessoas curiosas, isso tenha ajudado a saber um pouco mais */