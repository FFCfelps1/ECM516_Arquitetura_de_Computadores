// console.log('Eu primeiro...')
// console.log('Agoraeu...')
// console.log('Agora eu serei a ultima')

// const a = 5 + 6
// const b = 5 * 9

// console.log(a + b)

// function demorada(tempo){
//     const dataAtualMaistempo = new Date().getTime + tempo
//     while(new Date().getTime() <= dataAtualMaistempo);
//     const d = 8 + 2 * 6
//     console.log(`Demorada com tempo: ${tempo}`)
//     return d
// }

// // Sistemas de fila, quem entra primeira sai primeiro e o script principal será sempre o primeiro a ser agendado, via de regra será o primeiro a terminar
// setTimeout(() => {
//     demorada(5000)
// }, 5000)

// setTimeout(() => {
//     demorada(1000)
// }, 1000)

// console.log('Fim do script principal')

// setTimeout(() => {
//     console.log('Agenda pelo setTimeout')
// }, 0)

// const dataAtualMais5segundos = new Date().getTime() + 5000
// while(new Date().getTime() <= dataAtualMais5segundos);
// console.log('Terminando o script principal...')

// const a = 2 + 3
// const b = 6 * 1

// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500)

// const e = a + b * 2
// console.log(e)


// // CPU: Predominantemente caracterizadas por ciclos de CPU
// // IO Boudn: Predominantemente caracterizadas por operações de entrada e saída

// const fs = require('fs')
// const nomeArquivo = 'arquivo.txt'
// // função callback
// const exibirConteudo = (erro, conteudo) => {
//     console.log('A')
//     if (erro){
//         console.log(`Erro: ${erro}`)
//     }
//     else{
//         console.log(`Conteúdo: ${conteudo}`)
//         const dobro = Number(conteudo.toString()) * 2
//         // Mais uma função callback
//         const finalizar = erro => {
//             console.log(erro ? 'Deu erro ao escrever o dobro' : 'Ok, escreveu o dobro')
//             console.log('C')
//             const exibirDobro = (erro, conteudo) => {
//                 console.log('E')
//                 console.log(erro ? 'Deu erro ao escrever o dobro' : `Dobro: ${conteudo.toString()}`)
//             }
//             fs.readFile('dobro.txt', exibirDobro)
//             console.log('F')
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log('D')
//     }
// }
// fs.readFile(nomeArquivo, exibirConteudo)
// console.log('B')

// Promise: processamento assincrono e mais organizado
// 1 + 2 + 3 + ... + n
// demorando...
const calculoDemorando = n => {
    let cont = 0
    for(let i = 1; i <= n; i++)
        cont += i
    return cont
}

const res = calculoDemorando(1000)
console.log(res)