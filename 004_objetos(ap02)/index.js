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


// // Uma calculadora realiza as quatro operações fundamentais
// // soma: representada por uma arrow function que faz return
// //subtração: representa por uma arrow sem return
// // multiplicação: function regular
// // divisão: você escolhe
// //todas elas operam com dois operandos

// const calculadora = {
//     somar: (a, b) => {return a + b},
//     subtrair: (a, b) => a - b,
//     multiplicacao: function (a, b){return a * b},
//     divisao: (a, b) => a/b
// }

// console.log(calculadora.somar(1,2))
// console.log(calculadora.subtrair(1,2))
// console.log(calculadora.multiplicacao(1,2))
// console.log(calculadora.divisao(1,2))


// // Promise = é um objeto que fica associado a uma função demorada, no futuro consegue propragar o resultado
// // Pendente se sua função associada não está finalizada
// // Fullfield se a função associada finalizou sem erro
// // Error se a função associada finalizou com erro
// // 1 + 2 + 3 + ... + n

// // const calculoDemorado = (n) => {
// //     let ac = 0
// //     for (let i = 1; i <= n; i++){
// //         ac += i
// //     }
// //     return ac
// // }

// const calculoDemorado = (n) =>{
//     return new Promise((resolve, reject) => {
//         // se n for negativo propragar erro:
//         if (n < 0){
//             reject('O n não pode ser menor que 0 coloque um valor válido')
//         }
//         else {     
//             let ac = 0
//             for(let i = 1; i <= n; i++){
//                 ac += i
//             }
//             resolve(ac)
//         }
//     })
// }

// // Duas formas de tratar as promises (then, that)
// const minhaPromise = calculoDemorado(1000)
// minhaPromise
// .then((resultado) => {console.log(`Resultado: ${resultado}`)})
// .catch((erro) => {console.log(`Erro: ${erro}`)})

// // const res = calculoDemorado(1000)
// // console.log(res)

// // console.log('A')


// // Calculo rápido

// const calculoRapidinho = n => {
//     return n >= 0 ? Promise.resolve((n/2 * (n + 1))) : Promise.reject('Apenas valores maiores ou iguais a zero, por favor')
// }

// calculoRapidinho(1000)
// .then(function(resultado){console.log('Resultado:'+ resultado)})
// .catch(erro => console.log(`Erro: ${erro}`))

// calculoRapidinho(10)
// .then((res) => {
//     calculoRapidinho(res).then(res2 => {
//         calculoRapidinho(res2).then(res3 => {
//             calculoRapidinho(res3).then(res4 =>{
//                 console.log(res4)
//             })
//         })
//     })
// })


