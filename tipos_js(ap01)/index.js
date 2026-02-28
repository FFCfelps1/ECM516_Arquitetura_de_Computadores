// // Aparenta que a linguagem não tem tipos

// let a = 2
// console.log(a)
// // Tipo que a está apontando, pode mudar o poteiro
// console.log(typeof a)

// a = 'Agora sou uma string'
// console.log(a)
// console.log(typeof a)

// // Mas na verdade tem, só que são dinâmicos

// // Coerção implícita e explícita
// const n1 = 2
// const n2 = '3'

// // Implicitamente ele entendeu que deveria transformar o 2 para String e concatenar com a String 3
// const n3 = n1 + n2
// console.log(n3)

// // Explicitamente delcara que n2 será um número
// const n4 = n1 + Number(n2)
// console.log(n4)

// // Operadores de comparação de igualdade: == e ===
// console.log(1 == 1) // true
// console.log(1 === 1) // true
// console.log(1 == true) // true
// console.log(1 == [1]) // true
// // Não compara os tipos somente o conteúdo
// console.log(1 == '1') // true
// // Primeira se o tipo é igual e depois compara os valores
// console.log(1 === '1') // false
// // Qual é a diferença de null e undifined
// // null existe uma variável, mas não aponta para ninguem (não aponta)
// // undifined não defindo (não sabe se aponta ou não aponta)
// console.log(null == undefined) // true
// console.log([] == []) // false
// console.log([] == false) // true

// // Coleções(vetores)
// v1 = [] //Lista
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[1] = 'abc'
// console.log(v1.length)
// v1[10] = 'João'
// console.log(v1.length)
// console.log(v1)

// for (let i = 0; i < v1.length; i ++){
//     console.log(v1[i]) // Podemos ver que o empty é undefined
// }

// // Funções
// function hello(){
//     console.log('Oi')
// }
// hello()

// function hello(nome){
//     console.log(`Oi, ${nome}`)
// }
// hello('Maria')

// function soma(a, b){
//     return a + b
// }
// console.log(soma(2, 3))

// const dobro = function(n){
//     return 2 * n
// }
// console.log(dobro(6))

// const triplo = function(n = 5){ // Se não colocar valores n será 5 por padrão
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(undefined)) // Parenteses vazios é igual a undefined
// console.log(triplo(10))

// Arrow functions

//(() => {console.log('Oi')})()
const falarOi = () => {console.log('Oi')}
falarOi()

const falarOiNome = (nome) => {console.log(`Oi, ${nome}`)} // Tendo somente 1 parâmetro não precisa de parênteses e se tiver somente 1 intrução as chaves podem ser omitidas
falarOiNome()
falarOiNome('Maria')

const soma = (a, b) => a + b // Return está implícito quando não tem chaves
console.log(somar(2, 3))