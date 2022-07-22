/*
    O forEach é um metodo de array que executa a funcao
    mas nao espera retorno e nem retorna nada
    como a maioria dos metodos de array, forEach vai receber uma funcao
    que pode ou nao ser anonima e vai passar para essa funcao 3 parametros
    lembrando que nao obrigatoriamente vc precisa usar os 3,
    os parametro sendo:
     - 1 parametro: O elemento atual em que esta
     - 2 parametro: o index do elemento atual
     - 3 parametro: o array novamente, caso queira manipular de alguma forma
    mas como seria isso se fossemos tentar replicar ?
    aqui esta um exemplo de uma replica do forEach para tentar ajudar no entendimento
*/
// para contexto de simplicidade vou passar o array como parametro para funcao
// para ficar mais facil de entender o caminho
// mas dentro do Array,forEach o proprio forEach ja tem acesso ao array, atravez do this
function forEachFunction(array, callback) {
    for(let index = 0; index < array.length; index += 1) {
        const elementoAtual = array[index]
        callback(elementoAtual, index, array)
    }
}

let numberList = [1,2,3]

numberList.forEach((item) => console.log(item)) // vai printar 1, 2, 3
forEachFunction(numberList, (item) => console.log(item)) // vai printar 1, 2, 3

/*
    se voce testar, voce vera que a saida é a mesma, e é basicamente isso
    essa funcao resume o funcionamento do forEach, simplismente executando
    a callback passada,
    bonus: olha como ficaria a funcao do forEach que eu fiz se eu fosse
    usar o mesmo formato que é usado na classe Array
*/

/* essa é uma simplificacao da funcionalidade do metodo forEach,
    o forEach em si possui varias verificacoes das quais para o exemplo
    so iriam adicionar complexidade */
Array.prototype.forEach2 = function (callback) {
    for(let index = 0; index < this.length; index += 1) {
        const elementoAtual = this[index]
        callback(elementoAtual, index, this)
    }
}

numberList.forEach2((item) => console.log(item)) // vai printar 1, 2, 3
numberList.forEach((item) => console.log(item)) // vai printar 1, 2, 3

/* espero que para as pessoas curiosas, isso tenha ajudado a saber um pouco mais sobre o forEach */