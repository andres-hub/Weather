const axios = require('axios')
const argv = require('./config/yargs').argv
const place = require('./place/place')
const weather = require('./weather/weather')

const getInfo = async(city) => {
    try {
        const coords = await place.getPlaceLatLng(city)
        const temp = await weather.getWeather(coords.lat, coords.lng)
        return `La temperatura de ${city} es de ${temp}.`
    } catch (error) {
        return `No se logro determinar la temperatura de ${city}`
    }

}
getInfo(argv.city).then(console.table).catch(console.log)

// place.getPlaceLatLng(argv.city).then(console.log)
// weather.getWeather(3.030000, -75.169998).then(console.log)