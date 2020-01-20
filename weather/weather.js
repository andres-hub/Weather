const axios = require('axios')

const getWeather = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}9&appid=bb82849981b11d13609a96b32d9fe40c&units=metric`)

    return resp.data.main.temp

}

module.exports = {
    getWeather
}