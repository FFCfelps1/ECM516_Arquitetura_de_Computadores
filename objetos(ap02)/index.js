// JSON: JavaScript Object Notation
// // Uma pessoa que se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

// //Uma pessoa que se chama Maria, tem 21 anos, e mora na Rua B, número 50
// let pessoa = {
//     nome: 'Maria',
//     idade: 17,
//     endereco:{
//     rua: 'Rua B',
//     numero: 50
//     }
// }

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.endereco.rua)
// console.log(pessoa.endereco.numero)

// pessoa.nome = 'Ana Maria'
// console.log(pessoa.nome)

// // Uma concessionário tem nome, CNPJ e endereço (logadouro, número e bairro). Ela também tem seu estoque de veículos. Aquantidade de veículos é arbitrária. A qualquer instante, ela pode ter 2 ou 5 ou 17 veículos. Cada um possui modelo, marca e placa.

// const veiculo = {
//     marca: 'Honda',
//     modelo: 'Fit',
//     'Placa': 'AABB0011'
// }

// const veiculos = []

// const concessionaria = {
//     nome: 'Katchaum',
//     cnpj: 3139283,
//     endereco:{
//         logadouro: 'rua carros',
//         numero: 67,
//         bairo: 'relampago'
//     },
//     estoque: veiculos.push(veiculo)
// }

// console.log(concessionaria.estoque[0])


// Uma calculadora realiza as quatro operações fundamentais
// soma: representada por uma arrow function que faz return
//subtração: representa por uma arrow sem return
// multiplicação: function regular
// divisão: você escolhe
//todas elas operam com dois operandos

const calculadora = {
    somar: (a, b) => {return a + b},
    subtrair: (a, b) => a - b,
    multiplicacao: function (a, b){return a * b},
    divisao: (a, b) => a/b
}

console.log(calculadora.somar(1,2))
console.log(calculadora.subtrair(1,2))
console.log(calculadora.multiplicacao(1,2))
console.log(calculadora.divisao(1,2))