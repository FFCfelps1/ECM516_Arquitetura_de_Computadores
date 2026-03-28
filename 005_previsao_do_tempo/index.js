// // f39195fb680f4d9ece16436084bbf620
// // api.openweathermap.org/data/2.5/forecast
// const axios = require('axios')
// const appid = 'ef0b0973b783e0614ac87612ec04344b'
// const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
// const q = 'Itu'
// const cnt = 1
// const units = 'metric'
// const lang = 'pt_br'

// const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// // console.log(url)

// axios.get(url)
// .then(res => {
//     //console.log(res.data)
//     return res.data
// })
// .then(res => {
//     //console.log(res.list)
//     return res.list
// })
// .then(res => {
//     //temp máxima do primeiro item da previsão do tempo
//     //console.log(res[0].main.temp_max)
//     return res
// })
// .then(previsoes => {
//     for (let previsao of previsoes){
//         console.log(previsao.weather[0].description)
//     }
// })


// Funções async
// async function hello (nome){
//     return (`Olá, ${nome}`)
// }

// const res = hello('Ana')
// res.then((texto) => console.log(texto))
// console.log('A')

// Fatorial assíncrono

// const fatorial = n => {
//     if (n < 0) return Promise.reject('Valor não pode ser negativo')
//         let res = 1
//     for (let i = 2; i <= n; i++){
//         res *= i
//     }
//     return Promise.resolve(res)
// }

// const chamadaComThenCatch = () => {
//     fatorial(5)
//     .then(res => console.log(`Resolução: ${res}`))
//     .catch(erro => console.log(`Erro: ${erro}`))

//     // Se tem uma promisse e tem erro, mas não tem o tratamento resulta em erro (Código imprevisível)
//     fatorial(-5)
//     .then(res => console.log(`Resolução: ${res}`))
//     .catch(erro => console.log(`Erro: ${erro}`))
// }

// //chamadaComThenCatch()

// const chamadaComAsyncAwait = async () => {
//     try{
//         const f1 = await fatorial(5)
//         console.log(`Resolução: ${f1}`)
//     }
//     catch(erro){
//         console.log(`Erro: ${erro}`)
//     }

//     try{
//         const f2 = await fatorial(-5)
//         console.log(`Resolução: ${f2}`)
//     }
//     catch(erro){
//         console.log(`Erro: ${erro}`)
//     }
// }

// chamadaComAsyncAwait()

// Conversar com a API de previsão do tempo usando a Async Await

// f39195fb680f4d9ece16436084bbf620
// api.openweathermap.org/data/2.5/forecast
const axios = require('axios')
const appid = 'ef0b0973b783e0614ac87612ec04344b'
const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
const q = 'Itu'
const cnt = 1
const units = 'metric'
const lang = 'pt_br'

const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)

const getUrl = (url) => {

    if (url == undefined){
        console.log('O usuário deve colocar uma url válida')
    }
    return axios.get(url)
}

const chamadaGetUrl = async (url) => {
    try{
        const res = await getUrl(url)
        console.log('Resultado:', res.data)
    }
    catch(erro){
        console.log(`Erro: ${erro}`)
    }
}

chamadaGetUrl(url)