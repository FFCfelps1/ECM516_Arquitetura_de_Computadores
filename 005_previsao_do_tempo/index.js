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

axios.get(url)
.then(res => {
    //console.log(res.data)
    return res.data
})
.then(res => {
    //console.log(res.list)
    return res.list
})
.then(res => {
    //temp máxima do primeiro item da previsão do tempo
    //console.log(res[0].main.temp_max)
    return res
})
.then(previsoes => {
    for (let previsao of previsoes){
        console.log(previsao.weather[0].description)
    }
})