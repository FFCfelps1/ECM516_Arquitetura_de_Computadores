// JSON: JavaScript Object Notation
// // Uma pessoa que se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//Uma pessoa que se chama Maria, tem 21 anos, e mora na Rua B, número 50
let pessoa = {
    nome: 'Maria',
    idade: 17,
    endereco:{
    rua: 'Rua B',
    numero: 50
    }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereco.rua)
console.log(pessoa.endereco.numero)

pessoa.nome = 'Ana Maria'
console.log(pessoa.nome)