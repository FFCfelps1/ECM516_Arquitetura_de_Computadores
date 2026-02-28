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

// Operadores de comparação de igualdade: == e ===
console.log(1 == 1) // true
console.log(1 === 1) // true
console.log(1 == true) // true
console.log(1 == [1]) // true
// Não compara os tipos somente o conteúdo
console.log(1 == '1') // true
// Primeira se o tipo é igual e depois compara os valores
console.log(1 === '1') // false
// Qual é a diferença de null e undifined
// null existe uma variável, mas não aponta para ninguem (não aponta)
// undifined não defindo (não sabe se aponta ou não aponta)
console.log(null == undefined) // true
console.log([] == []) // false
console.log([] == false) // true