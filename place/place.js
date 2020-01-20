const axios = require('axios')
const getPlaceLatLng = async(city) => {
    const encodeUrl = encodeURI(city)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '173e8f31dbmsh3340e572416ee72p1887a6jsna72a08d3e5d6' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`NO hay resultados para ${city}`);
    }
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        name,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
}