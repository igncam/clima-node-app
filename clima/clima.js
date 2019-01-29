const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5a8891090323c0dc037c51ed82ff0048`)
    if (resp.data.cod === '400') {

        throw new Error(`No hay resultados del clima para esas cordenadas`)
    }
    return resp.data.main.temp




}
module.exports = {
    getClima
}